import { Dataset, DatasourcePlugin } from '@ng-druid/datasource';
import { TransformSelectComponent } from './components/transform-select/transform-select.component';
import { TransformMergeComponent } from './components/transform-merge/transform-merge.component';
import { iif, of } from 'rxjs';
import { AttributeValue, AttributeSerializerService } from '@ng-druid/attributes';
import { map } from 'rxjs/operators';
import { JSONPath } from 'jsonpath-plus';
import { SelectTransform } from './models/transform.models';

export const selectDatasourcePluginFactory = (attributeSerializer: AttributeSerializerService) => {
  return new DatasourcePlugin<string>({ 
    id: 'select', 
    title: 'Select', 
    editor: TransformSelectComponent,
    fetch: ({ settings, dataset }: { settings: Array<AttributeValue>, dataset?: Dataset }) => iif(
      () => !!dataset,
      of(dataset).pipe(
        map(() => new SelectTransform(attributeSerializer.deserializeAsObject(settings))),
        map(ds => new Dataset({ results: JSONPath({ path: ds.query, json: dataset.results }) }))
      ),
      of(new Dataset())
    )
  })
};

export const mergeDatasourcePluginFactory = () => {
  return new DatasourcePlugin<string>({ 
    id: 'merge', 
    title: 'Merge', 
    editor: TransformMergeComponent,
    fetch: ({ settings }: { settings: Array<AttributeValue> }) => of(new Dataset())
  })
};