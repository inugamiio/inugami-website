import {Component, signal, WritableSignal} from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuCopyComponent} from '../../../../components/copy/copy.component';
import {RouterLink} from '@angular/router';
import {InuCite} from 'inugami-ng/components/inu-cite';

@Component({
    templateUrl: './inugami_framework_monitoring_feign.view.html',
    styleUrls: ['./inugami_framework_monitoring_feign.view.scss'],
  imports: [
    FrameworkAsideComponent,
    InuCode,
    InuCopyComponent,
    RouterLink,
    InuCite
  ]
})
export class InugamiFrameworkMonitoringFeignView{
  protected mavenDependencies: WritableSignal<string> = signal<string>(
    `
<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_monitoring_springboot</artifactId>
</dependency>
        `
  );
  protected javaDependencies: WritableSignal<string> = signal<string>(
    `
requires io.inugami.monitoring.springboot;
        `
  );

}
