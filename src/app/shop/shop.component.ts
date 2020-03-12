import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/IProduct";
import {productTypesEnum} from "../../models/ProductTypesEnum";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],
  providers: [ProductsService]
})

export class ShopComponent implements OnInit {

  products: IProduct[] = [];
  loading: boolean = true;
  typeFilter: number = null;
  subTypeFilter: number = null;

  constructor(private productService: ProductsService) { }

  async ngOnInit() {
    this.getProductsList();
  }

  async getProductsList(type?) {
    this.products = await this.productService.getProducts(type ? 'type=' + type : null)
      .then(res => {
        this.loading = false;
        return (this.subTypeFilter || this.subTypeFilter === 0) ?
          res.filter(product => product.subType === this.subTypeFilter) : res;
      });
  }

  changeTypeFilter(value: number) {
    this.typeFilter = value;
    value || value === 0 ? this.getProductsList(value.toString()) : this.getProductsList();
  }

  changeSubTypeFilter(value: number) {
    this.subTypeFilter = value;
  }

}
