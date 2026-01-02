import { Component, inject, OnInit, signal } from '@angular/core';
import { MavenAsideComponent } from './maven-aside/maven-aside.component';
import { InuCodeComponent } from '../../../components/code/code.component';
import { InuDocItemComponent } from '../../../components/doc-item/doc-item.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
    templateUrl: './inugami_maven_getting_started.view.html',
    styleUrls: ['./inugami_maven_getting_started.view.scss'],
    imports: [
        MavenAsideComponent,
        InuCodeComponent,
        InuDocItemComponent
    ]
})
export class InugamiMavenGettingStartedView implements OnInit{
    baseDir = signal<string>('${basedir}');
    builddir = signal<string>('{{builddir}}');
    folderName = signal<string>('{{folder name}}');
    issueManagementUrl = signal<string>('{{issueManagement.url}}');
    linkedHashMapStringSerializable = signal<string>('LinkedHashMap<String, Serializable>');
    artifactName = signal<string>('{{inugami.release.note.artifactName}}');
    version = signal<string>('{{version}}');

    private readonly gaService = inject(GoogleAnalyticsService);

    
    ngOnInit(): void {
       this.gaService.pageView("/maven/getting-started");
    }
}