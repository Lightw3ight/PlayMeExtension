import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from './spotify.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        SpotifyService
    ]
})
export class SpotifyModule { }