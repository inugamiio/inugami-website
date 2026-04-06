import {Component} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuCite} from 'inugami-ng/components/inu-cite';
import {InuDocItem} from 'inugami-ng/components/inu-doc-item';

@Component({
  templateUrl: './inugami_framework_tools.view.html',
  styleUrls: ['./inugami_framework_tools.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuDocItem,
    InuCode,
    InuCite
  ]
})
export class InugamiFrameworkToolsView {


}
