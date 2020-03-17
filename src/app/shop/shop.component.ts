import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/IProduct";
import { Router, ParamMap } from '@angular/router';

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

  constructor(private productService: ProductsService, private router: Router) { }

  async ngOnInit() {
    this.getProductsList();
  }

  async getProductsList(type?) {
    this.checkImg(await this.productService.getProducts(type ? 'type=' + type : null)
      .then(res => {
        this.loading = false;
        return (this.subTypeFilter || this.subTypeFilter === 0) ?
          res.filter(product => product.subType === this.subTypeFilter) : res;
      }));
  }

  changeTypeFilter(value: number) {
    this.typeFilter = value;
    value || value === 0 ? this.getProductsList(value.toString()) : this.getProductsList();
  }

  changeSubTypeFilter(value: number) {
    this.subTypeFilter = value;
  }

  checkImg(list) {        // TODO Delete on prod. Test for empty imgs
    for(let i = 0; i < list.length; i++) {
       !list[i].image.length && (list[i].image = 'assets/images/test-bracer.jpg');
    }

    this.products = list;
  }

  goToCard(id) {
    this.router.navigate(['/card/' + id]);
  }

}
