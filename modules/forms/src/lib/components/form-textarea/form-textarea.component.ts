import { Component } from "@angular/core";
import { ControlContainer } from "@angular/forms";
import { TokenizerService } from "@ng-druid/token";
import { AttributeSerializerService } from '@ng-druid/attributes';
import { OptionsResolverService } from "../../services/options-resolver.services";
import { FormElementBase } from "../../directives/form-element-base.directive";
import { FormsContextHelperService } from "../../services/forms-context-helper.service";

@Component({
  selector: 'druid-forms-form-textarea',
  styleUrls: ['./form-textarea.component.scss'],
  templateUrl: './form-textarea.component.html'
})
export class FormTextareaComponent extends FormElementBase {

  cols = 20;
  rows = 20;

  constructor(
    attributeSerializer: AttributeSerializerService,
    optionsResolverService: OptionsResolverService,
    tokenizerService: TokenizerService,
    formsContextHelper: FormsContextHelperService,
    controlContainer?: ControlContainer
  ) {
    super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, controlContainer);
  }

}