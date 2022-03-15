import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@ng-druid/material';
import { DatasourceModule, DatasourcePluginManager } from '@ng-druid/datasource';
import { AngularSplitModule } from 'angular-split';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SnippetModule } from '@ng-druid/snippet';
import { TokenModule } from '@ng-druid/token';
import { ParamContextExtractorService } from '@ng-druid/context';
import { AttributeSerializerService } from '@ng-druid/attributes';
import { RestSourceFormComponent } from './components/rest-source-form/rest-source-form.component';
import { restDatasourcePluginFactory, restEntityCrudAdaptorPluginFactory } from './rest.factories';
import { RestDatasourceComponent } from './components/rest-datasource/rest-datasource.component';
import { RestFetchHelperService } from './services/rest-fetch-helper.service';
import { CrudAdaptorPluginManager, CrudModule } from '@ng-druid/crud';
import { DparamModule, ParamEvaluatorService } from '@ng-druid/dparam';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';

@NgModule({
  declarations: [ RestSourceFormComponent, RestDatasourceComponent ],
  imports: [
    CommonModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularSplitModule,
    NgxJsonViewerModule,
    SnippetModule,
    DatasourceModule,
    TokenModule,
    CrudModule,
    DparamModule
  ],
  exports: [ RestSourceFormComponent, RestDatasourceComponent ],
  providers: [
    RestFetchHelperService,
    // Crud adaptor requires this is defined here... hmmm... that doesn't seem right. Should inherit from parent.
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ]
})
export class RestModule { 
  constructor(
    dspm: DatasourcePluginManager,
    fetchHelper: RestFetchHelperService,
    paramContextExtractor: ParamContextExtractorService,
    attributeSerializer: AttributeSerializerService,
    cpm: CrudAdaptorPluginManager,
    paramsEvaluatorService: ParamEvaluatorService,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config: DefaultDataServiceConfig
  ) {
    dspm.register(restDatasourcePluginFactory(fetchHelper, paramContextExtractor, attributeSerializer));
    cpm.register(restEntityCrudAdaptorPluginFactory(paramsEvaluatorService, http, httpUrlGenerator, config));
  }
}
