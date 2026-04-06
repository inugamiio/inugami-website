import {Component, signal, WritableSignal} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';

import {RouterLink} from '@angular/router';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuCopy} from 'inugami-ng/components/inu-copy';
import {InuDocItem} from 'inugami-ng/components/inu-doc-item';

@Component({
             templateUrl: './inugami_framework_exception.view.html',
             styleUrls  : ['./inugami_framework_exception.view.scss'],
             imports    : [
               FrameworkAsideComponent,
               InuDocItem,
               InuCopy,
               RouterLink,
               InuCode
             ]
           })
export class InugamiFrameworkExceptionView {


  protected mavenDependencies: WritableSignal<string> = signal<string>(
    `
<dependency>
    <groupId>io.inugami.framework</groupId>
    <artifactId>inugami_api_interfaces</artifactId>
</dependency>

<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_monitoring_springboot</artifactId>
</dependency>

<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_monitoring_core</artifactId>
</dependency>

<dependency>
    <groupId>io.inugami.framework.commons</groupId>
    <artifactId>inugami_commons_test</artifactId>
    <scope>test</scope>
</dependency>
        `
  );
  protected javaDependencies: WritableSignal<string>  = signal<string>(
    `
requires io.inugami.framework.interfaces;
requires io.inugami.monitoring.core;
requires io.inugami.monitoring.springboot;
        `
  );

}
