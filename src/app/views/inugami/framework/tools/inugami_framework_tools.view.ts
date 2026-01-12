import { Component } from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import { InuDocItemComponent } from '../../../../components/doc-item/doc-item.component';
import { InuCodeComponent } from '../../../../components/code/code.component';
import { RouterLink } from '@angular/router';

@Component({
    templateUrl: './inugami_framework_tools.view.html',
    styleUrls: ['./inugami_framework_tools.view.scss'],
    imports:[
        FrameworkAsideComponent,
        InuCodeComponent,
        InuDocItemComponent,
        RouterLink
    ]
})
export class InugamiFrameworkToolsView{
    

}