import { Component, signal, WritableSignal } from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import { InuCodeComponent } from '../../../../components/code/code.component';
import { InuDocItemComponent } from '../../../../components/doc-item/doc-item.component';
import { InuCopyComponent } from '../../../../components/copy/copy.component';
import { RouterLink } from '@angular/router';

@Component({
    templateUrl: './inugami_framework_functional.view.html',
    styleUrls: ['./inugami_framework_functional.view.scss'],
    imports:[
            FrameworkAsideComponent,
            InuCodeComponent,
            InuDocItemComponent,
            InuCopyComponent,
            RouterLink
    ]
})
export class InugamiFrameworkFunctionalView{
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

}