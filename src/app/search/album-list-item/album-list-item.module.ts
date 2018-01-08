import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlbumListItemComponent } from './album-list-item.component';
import { MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule
    ],
    exports: [AlbumListItemComponent],
    declarations: [AlbumListItemComponent]
})
export class AlbumListItemModule { }
