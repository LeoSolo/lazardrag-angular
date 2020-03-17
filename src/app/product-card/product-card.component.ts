import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {IProduct} from "../../models/IProduct";
import {productTypesEnum, productSubTypes} from '../../models/ProductTypesEnum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  providers: [ProductsService]
})
export class ProductCardComponent implements OnInit {

  currentId: string = null;
  product: IProduct = null;
  private subscription: Subscription;
  productTypesEnum = productTypesEnum;
  productSubTypes = productSubTypes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {
    this.subscription = activatedRoute.params.subscribe(params => this.currentId = params['id']);
  }

  ngOnInit() {
    this.productService.getProduct(this.currentId)
      .then(res => {
        this.product = res;
      })
  }

  goBack() {
    this.router.navigate(['']);
    return false;
  }

}
