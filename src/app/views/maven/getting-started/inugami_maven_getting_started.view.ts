import {Component, signal} from '@angular/core';
import {MavenAsideComponent} from './maven-aside/maven-aside.component';
import {InuCode} from 'inugami-ng/components/inu-code';
import {InuDocItem} from 'inugami-ng/components/inu-doc-item';

@Component({
             templateUrl: './inugami_maven_getting_started.view.html',
             styleUrls  : ['./inugami_maven_getting_started.view.scss'],
             imports    : [
               MavenAsideComponent,
               InuCode,
               InuDocItem
             ]
           })
export class InugamiMavenGettingStartedView {
  baseDir                         = signal<string>('${basedir}');
  builddir                        = signal<string>('{{builddir}}');
  folderName                      = signal<string>('{{folder name}}');
  issueManagementUrl              = signal<string>('{{issueManagement.url}}');
  linkedHashMapStringSerializable = signal<string>('LinkedHashMap<String, Serializable>');
  artifactName                    = signal<string>('{{inugami.release.note.artifactName}}');
  version                         = signal<string>('{{version}}');
}
