import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlbumComponent } from './album.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FlexLayoutModule,
        RouterModule

    ],
    exports: [AlbumComponent],
    declarations: [AlbumComponent]
})
export class AlbumModule { }
