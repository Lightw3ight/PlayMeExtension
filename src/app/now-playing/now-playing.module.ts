import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NowPlayingComponent } from './now-playing.component';
import { MatProgressBarModule, MatTabsModule } from '@angular/material';
import { SpotifyModule } from 'app/spotify/spotify.module';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        SharedModule,
        RouterModule,
        MatProgressBarModule,
        MatTabsModule,
        SpotifyModule
    ],
    exports: [NowPlayingComponent],
    declarations: [NowPlayingComponent]
})
export class NowPlayingModule { }
