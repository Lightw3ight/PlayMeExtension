import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArtistListItemComponent } from './artist-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ArtistListItemComponent],
    declarations: [ArtistListItemComponent]
})
export class ArtistListItemModule { }
