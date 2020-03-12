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
  mf: string = null;

  @Output() subFilter: EventEmitter<number> = new EventEmitter<number>();
  sf: string = null;

  filtered: boolean = false;
  titles: string[] = [];
  subTitles: string[][] = [];
  openedIndex: number = null;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.setTitlesAndSubTitles();
  }

  accordionTrigger(index) {
    this.openedIndex === index ?
      this.openedIndex = null : this.openedIndex = index;
  }

  setTitlesAndSubTitles() {
    let temp = Object.entries(productTypesEnum);
    temp = temp.splice(temp.length/2);

    for(let i = 0; i < temp.length; i++) {
      this.titles.push(temp[i][0]);
    }

    this.subTitles = productSubTypes;
  }

  setMainFilter(val, index) {
    this.filtered = true;
    this.filter.emit(productTypesEnum[val]);
    this.mf = val;
    this.subFilter.emit(null);
    this.sf = null;
    this.accordionTrigger(index);
  }

  setSubFilter(val, subVal) {
    this.filtered = true;
    this.filter.emit(productTypesEnum[val]);
    this.mf = val;
    this.subFilter.emit(productSubTypes[productTypesEnum[val]].indexOf(subVal));
    this.sf = subVal;
  }

  showAllProducts() {
    this.filtered = false;
    this.filter.emit(null);
    this.mf = null;
    this.subFilter.emit(null);
    this.sf = null;
  }

}
