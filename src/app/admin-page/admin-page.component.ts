import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})

export class AdminPageComponent implements OnInit {

  createProductModalShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  createProductModalTrigger() {
    this.createProductModalShown = !this.createProductModalShown;
  }
}
