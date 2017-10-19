import { SideNavModule } from './side-nav/side-nav.module';
import { SiteHeaderModule } from './site-header/site-header.module';
import { ZoneSelectorModule } from './zone-selector/zone-selector.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ZoneSelectorComponent } from './zone-selector/zone-selector.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { SideNavComponent } from './side-nav/side-nav.component';
// import { SiteHeaderComponent } from './site-header/site-header.component';
// import { ZoneSelectorComponent } from './zone-selector/zone-selector.component';
// import { MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        // RouterModule,
        // MatDialogModule,
        // FlexLayoutModule

        ZoneSelectorModule,
        SiteHeaderModule,
        SideNavModule
    ],
    declarations: [
        // SideNavComponent,
        // SiteHeaderComponent,
        // ZoneSelectorComponent
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
