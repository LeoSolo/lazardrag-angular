import {IProduct} from "../models/IProduct";
import {Component, Injectable, NgModule} from "@angular/core";
import {ApiHelper} from "../Helpers/api/api.helper";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  // private products: IProduct[] = [];

  constructor(
    private apiHelper: ApiHelper
  ){}

  async getProducts(): Promise<IProduct[]> {
    return await this.apiHelper.getData('PRODUCTS')
      .then(response => response.json())
  }

  // addProduct(product: IProduct){
  //   this.products.push(product);
  // }

  // editProduct(product: IProduct){}

}
