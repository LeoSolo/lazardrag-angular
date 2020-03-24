import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/IProduct";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})

export class AdminPageComponent implements OnInit {

  createProductModalShown: boolean = false;
  product: IProduct = null;

  constructor() { }

  ngOnInit() {
  }

  createProductModalTrigger(product) {
    product ? this.product = product : this.product = null;
    this.createProductModalShown = !this.createProductModalShown;
  }
}
