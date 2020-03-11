import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { productSubTypes, productTypesEnum } from '../../../models/ProductTypesEnum';
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.less']
})
export class LeftPanelComponent implements OnInit {

  @Output() filter: EventEmitter<number> = new EventEmitter<number>();
  @Output() subFilter: EventEmitter<number> = new EventEmitter<number>();
  titles: string[] = [];
  subTitles: string[][] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.setTitlesAndSubTitles();
  }

  accordionTrigger() {

  }

  setTitlesAndSubTitles() {
    let temp = Object.entries(productTypesEnum);
    temp = temp.splice(temp.length/2);

    for(let i = 0; i < temp.length; i++) {
      this.titles.push(temp[i][0]);
    }

    this.subTitles = productSubTypes;
  }

  setMainFilter(val) {
    this.filter.emit(productTypesEnum[val]);
    this.subFilter.emit(null);
  }

  setSubFilter(val, subVal) {
    this.setMainFilter(val);
    this.subFilter.emit(productSubTypes[productTypesEnum[val]].indexOf(subVal));
  }

}
