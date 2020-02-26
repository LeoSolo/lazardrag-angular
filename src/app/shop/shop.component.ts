import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/IProduct";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],
  providers: [ProductsService]
})

export class ShopComponent implements OnInit {

  products: IProduct[] = [];
  loading: boolean = true;

  constructor(private productService: ProductsService) { }

  async ngOnInit() {
    this.getProductsList();
  }

  async getProductsList() {
    this.products = await this.productService.getProducts()
      .then(res => {
        this.loading = false;
        return res;
      });
  }

}
