import { SideNavModule } from './side-nav/side-nav.module';
import { SiteHeaderModule } from './site-header/site-header.module';
import { ZoneSelectorModule } from './zone-selector/zone-selector.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ZoneSelectorComponent } from './zone-selector/zone-selector.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ZoneSelectorModule,
        SiteHeaderModule,
        SideNavModule
    ],
    exports: [
        SideNavComponent,
        SiteHeaderComponent,
        ZoneSelectorComponent
    ],
    providers: [
    ]
})
export class CoreModule { }
