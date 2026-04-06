import {Component} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';
import {RouterLink} from '@angular/router';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuDocItem} from 'inugami-ng/components/inu-doc-item';

@Component({
  templateUrl: './inugami_framework_getting_started.view.html',
  styleUrls: ['./inugami_framework_getting_started.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuCode,
    InuDocItem,
    RouterLink
  ]
})
export class InugamiFrameworkGettingStartedView {


}
