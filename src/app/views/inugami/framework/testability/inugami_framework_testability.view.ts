import {Component, signal, WritableSignal} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';
import {RouterLink} from '@angular/router';
import {InuCode} from 'inugami-ng/components/inu-code';
import { InuCopy } from 'inugami-ng/components/inu-copy';
@Component({
  templateUrl: './inugami_framework_testability.view.html',
  styleUrls: ['./inugami_framework_testability.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuCode,
    InuCopy,
    RouterLink
  ]
})
export class InugamiFrameworkTestabilityView {

  protected mavenDependencies: WritableSignal<string> = signal<string>(
    `
<dependency>
    <groupId>io.inugami.framework.commons</groupId>
    <artifactId>inugami_commons_test</artifactId>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_logs_obfuscator</artifactId>
</dependency>
        `
  );
}
