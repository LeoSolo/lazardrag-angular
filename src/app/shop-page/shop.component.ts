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

  constructor(private productService: ProductsService) { }

  async ngOnInit() {
    this.products = await this.productService.getProducts();
  }

}
