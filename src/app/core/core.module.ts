import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SideNavComponent } from './side-nav/side-nav.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ZoneSelectorComponent } from './zone-selector/zone-selector.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule.forRoot(),
        FlexLayoutModule
    ],
    declarations: [
        SideNavComponent,
        SiteHeaderComponent,
        ZoneSelectorComponent
    ],
    exports: [
        SideNavComponent,
        SiteHeaderComponent,
        ZoneSelectorComponent
    ],
    providers: [
    ]
})
export class CoreModule {

}
