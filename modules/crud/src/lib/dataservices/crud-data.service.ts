import { EntityCollectionDataService, DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, EntityDefinitionService, EntityDefinition } from "@ngrx/data";
import { Update } from "@ngrx/entity";
import { forkJoin, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CrudAdaptorPluginManager } from '../services/crud-adaptor-plugin-manager.service';
import { map, switchMap } from "rxjs/operators";
import * as uuid from 'uuid';
import { CrudEntityMetadata } from "../models/entity-metadata.models";
import { Param } from "dparam";
// import { Param } from "dparam";

export class CrudDataService<T> extends DefaultDataService<T> implements EntityCollectionDataService<T> {

  constructor(
    entityName: string,
    protected http: HttpClient,
    protected httpUrlGenerator: HttpUrlGenerator,
    protected crud: CrudAdaptorPluginManager,
    protected entityDefinitionService: EntityDefinitionService,
    config?: DefaultDataServiceConfig
  ) {
    super(entityName, http, httpUrlGenerator, config);
  }

  add(object: T): Observable<T> {

    // return of(entity);

    const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata as CrudEntityMetadata<any, {}>;
    // console.log('crud def');
    // console.log(metadata.crud);

    const adaptors = Object.keys(metadata.crud);
    const operations$ = adaptors.map(
      a => this.crud.getPlugin(a).pipe(
        map(p => ({ p, params: metadata.crud[a].params ? Object.keys(metadata.crud[a].params).reduce((p, name) => ({ ...p, [name]: new Param({ flags: [], mapping: { type: 'static', value: metadata.crud[a].params[name], context: undefined, testValue: metadata.crud[a].params[name] } }) }), {}) : {} })),
        switchMap(({ p, params }) => p.create({ object, params, identity: () => of({ identity: uuid.v4() }) }))
      )
    );

    return forkJoin(operations$).pipe(
      map(() => object)
    );

    /* 
    const plugin = Object.keys(metadata.crud).pop();

    execute each defined plugin, first convert params object to true param array and pass to operation.

    return this.crud.getPlugin('aws_s3_entity').pipe(
      switchMap(p => p.create({ object: entity, identity: ({ object }) => of({ identity: uuid.v4() }) })),
      map(() => entity)
    );*/

  }
  update(update: Update<T>): Observable<T> {
    return of(undefined);
  }
  upsert(entity: T): Observable<T> {
    //this.entities.set(entity.id, entity);
    return of(entity);

    /*return new Observable<T>(obs => {
      const s3 = new S3Client({
        region: 'us-east-1',
        credentials: fromCognitoIdentityPool({
          client: new CognitoIdentityClient({ region: 'us-east-1' }),
          identityPoolId: 'us-east-1:6f5cdc41-35b0-41ca-9f6b-7eca11320942',
          logins: {
            'cognito-identity.amazonaws.com': () => this.authFacade.token$.toPromise()
          }
        }),
      });
      const command = new PutObjectCommand({
        Bucket: 'classifieds-ui-dev',
        Key: 'panelpages/test_2021102301.json.gz',
        Body: JSON.stringify(entity),
        ContentType: 'application/json',
        ContentEncoding: 'gzip'
      });
      s3.send(command).then(res => {
        console.log('sent');
        console.log(res);
        obs.next(entity);
        obs.complete();
      }).catch(e => {
        console.log('error')
        console.log(e);
        obs.error()
        obs.complete();
      });
    });*/

  }

}