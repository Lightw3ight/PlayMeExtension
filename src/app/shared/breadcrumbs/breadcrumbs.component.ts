import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private _location: Location) {

  }

  ngOnInit() {

  }

  back() {
    this._location.back();
  }
}
