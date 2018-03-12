import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { ResourceTableComponent } from './components/resource-table/resource-table.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { AddProjectComponent } from './components/addproject/addproject.component';
import { AddResourceComponent } from './components/addresource/addresource.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchDataComponent,
        ResourceTableComponent,
        ProjectTableComponent,
        AddProjectComponent,
        AddResourceComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'projecttable', pathMatch: 'full' },
            { path: 'projecttable', component: ProjectTableComponent },
            { path: 'resourcetable', component: ResourceTableComponent },
            { path: 'addproject', component: AddProjectComponent },
            { path: 'addresource', component: ResourceTableComponent },
            { path: 'fetch-data', component: AddResourceComponent },
            { path: '**', redirectTo: 'home' },
        ])
    ]
})
export class AppModuleShared {
}
