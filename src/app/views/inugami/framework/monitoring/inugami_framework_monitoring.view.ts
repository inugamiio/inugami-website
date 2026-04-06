import {Component, signal, WritableSignal} from '@angular/core';
import {FrameworkAsideComponent} from '../framework-aside/framework-aside.component';
import {RouterLink} from '@angular/router';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuCopy} from 'inugami-ng/components/inu-copy';
import {InuDocItem} from 'inugami-ng/components/inu-doc-item';

@Component({
             templateUrl: './inugami_framework_monitoring.view.html',
             styleUrls  : ['./inugami_framework_monitoring.view.scss'],
             imports    : [
               FrameworkAsideComponent,
               InuCode,
               InuDocItem,
               InuCopy,
               RouterLink
             ]
           })
export class InugamiFrameworkMonitoringView {

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
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_logs_obfuscator</artifactId>
</dependency>

<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_monitoring_springboot</artifactId>
</dependency>

<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_monitoring_springboot</artifactId>
</dependency>

<!-- If you use activeMQ -->
<dependency>
    <groupId>io.inugami.monitoring</groupId>
    <artifactId>inugami_monitoring_springboot_activemq</artifactId>
</dependency>

<dependency>
    <groupId>io.inugami.monitoring.providers</groupId>
    <artifactId>inugami_monitoring_providers_log</artifactId>
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
requires io.inugami.logs.obfuscator ;
requires io.inugami.monitoring.core;
requires io.inugami.monitoring.providers.logs;
requires io.inugami.monitoring.sensors.defaults;
requires io.inugami.monitoring.springboot;
// If you use activeMQ
requires io.inugami.monitoring.springboot.activemq;
        `
  );
}
