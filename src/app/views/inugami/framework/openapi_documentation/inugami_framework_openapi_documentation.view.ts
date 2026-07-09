import { Component } from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import {InuCode} from 'inugami-ng/components/inu-code'

@Component({
    templateUrl: './inugami_framework_openapi_documentation.view.html',
    styleUrls: ['./inugami_framework_openapi_documentation.view.scss'],
             imports: [
               FrameworkAsideComponent,
               InuCode
             ]
           })
export class InugamiFrameworkOpenApiDocumentationView{


}
