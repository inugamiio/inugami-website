import {Component} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';
import {InuDocItemComponent} from '../../../../components/doc-item/doc-item.component';
import {RouterLink} from '@angular/router';
import {InuCode} from 'inugami-ng/components/inu-code';

@Component({
  templateUrl: './inugami_framework_getting_started.view.html',
  styleUrls: ['./inugami_framework_getting_started.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuCode,
    InuDocItemComponent,
    RouterLink
  ]
})
export class InugamiFrameworkGettingStartedView {


}
