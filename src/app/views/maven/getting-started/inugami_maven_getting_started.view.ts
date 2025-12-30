import { Component, OnInit, signal } from '@angular/core';
import { MavenAsideComponent } from './maven-aside/maven-aside.component';
import { InuCodeComponent } from '../../../components/code/code.component';
import { InuDocItemComponent } from '../../../components/doc-item/doc-item.component';

@Component({
    templateUrl: './inugami_maven_getting_started.view.html',
    styleUrls: ['./inugami_maven_getting_started.view.scss'],
    imports: [
        MavenAsideComponent,
        InuCodeComponent,
        InuDocItemComponent
    ]
})
export class InugamiMavenGettingStartedView {
    baseDir = signal<string>('${basedir}');
    builddir = signal<string>('{{builddir}}');
    folderName = signal<string>('{{folder name}}');
    issueManagementUrl = signal<string>('{{issueManagement.url}}');
    linkedHashMapStringSerializable = signal<string>('LinkedHashMap<String, Serializable>');
    artifactName = signal<string>('{{inugami.release.note.artifactName}}');
    version = signal<string>('{{version}}');
}