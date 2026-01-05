import { Component, signal, WritableSignal } from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import { InuCodeComponent } from '../../../../components/code/code.component';
import { InuDocItemComponent } from '../../../../components/doc-item/doc-item.component';
import { RouterLink } from '@angular/router';
import { InuCopyComponent } from '../../../../components/copy/copy.component';

@Component({
    templateUrl: './inugami_framework_exception.view.html',
    styleUrls: ['./inugami_framework_exception.view.scss'],
    imports:[
        FrameworkAsideComponent,
        InuCodeComponent,
        InuDocItemComponent,
        InuCopyComponent,
        RouterLink
    ]
})
export class InugamiFrameworkExceptionView{
    

     protected inugamiApiInterfacesMaven: WritableSignal<string> = signal<string>(
        `
        <dependency>
            <groupId>io.inugami.framework</groupId>
            <artifactId>inugami_api_interfaces</artifactId>
        </dependency>
        `
    );
    protected inugamiApiInterfacesJava: WritableSignal<string> = signal<string>(
        `
         requires io.inugami.framework.interfaces;
        `
    );

    protected inugamiMonitoringSpringbootMaven: WritableSignal<string> = signal<string>(
        `
        <dependency>
            <groupId>io.inugami.monitoring</groupId>
            <artifactId>inugami_monitoring_springboot</artifactId>
        </dependency>
        `
    );
    protected inugamiMonitoringSpringbootJava: WritableSignal<string> = signal<string>(
        `
         requires io.inugami.monitoring.springboot;
        `
    );

    protected inugamiMonitoringMaven: WritableSignal<string> = signal<string>(
        `
        <dependency>
            <groupId>io.inugami.monitoring</groupId>
            <artifactId>inugami_monitoring_core</artifactId>
        </dependency>
        `
    );
    protected inugamiMonitoringJava: WritableSignal<string> = signal<string>(
        `
         requires io.inugami.monitoring.core;
        `
    );
}