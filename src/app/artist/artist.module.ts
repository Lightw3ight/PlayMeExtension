import { FlexLayoutModule } from '@angular/flex-layout';
import { AlbumListItemModule } from '../search/album-list-item/album-list-item.module';
import { SharedModule } from '../shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArtistComponent } from './artist.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FlexLayoutModule,
        AlbumListItemModule
    ],
    exports: [ArtistComponent],
    declarations: [ArtistComponent]
})
export class ArtistModule { }
