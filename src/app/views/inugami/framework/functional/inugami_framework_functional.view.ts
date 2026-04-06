import {Component, signal, WritableSignal} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';

import {RouterLink} from '@angular/router';
import {InuCode} from 'inugami-ng/components/inu-code';
import { InuCopy } from 'inugami-ng/components/inu-copy';
import {InuDocItem} from 'inugami-ng/components/inu-doc-item';

@Component({
  templateUrl: './inugami_framework_functional.view.html',
  styleUrls: ['./inugami_framework_functional.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuCode,
    InuDocItem,
    InuCopy,
    RouterLink
  ]
})
export class InugamiFrameworkFunctionalView {
  protected mavenDependencies: WritableSignal<string> = signal<string>(
    `
<dependency>
    <groupId>io.inugami.framework</groupId>
    <artifactId>inugami_api_interfaces</artifactId>
</dependency>
        `
  );
  protected javaDependencies: WritableSignal<string> = signal<string>(
    `
requires io.inugami.framework.interfaces;
        `
  );
  protected supplier_T: WritableSignal<string> = signal<string>(
    `
Supplier<T>
        `
  );
}
