import {Component} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';
import {InuDocItemComponent} from '../../../../components/doc-item/doc-item.component';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuCite} from 'inugami-ng/components/inu-cite';

@Component({
  templateUrl: './inugami_framework_tools.view.html',
  styleUrls: ['./inugami_framework_tools.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuDocItemComponent,
    InuCode,
    InuCite
  ]
})
export class InugamiFrameworkToolsView {


}
