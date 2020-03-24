import {IProduct} from "../models/IProduct";
import {Injectable} from "@angular/core";
import {ApiHelper} from "../Helpers/api/api.helper";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private apiHelper: ApiHelper
  ){}

  async getProducts(params?): Promise<IProduct[]> {
    return await this.apiHelper.getData('PRODUCTS', params)
      .then(response => response.json())
  }

  async getProduct(params?): Promise<IProduct> {
    return await this.apiHelper.getItemById('PRODUCTS', params)
      .then(response => response.json())
  }

  async updateProduct(body) {
    return await this.apiHelper.update('PRODUCTS', body)
  }

  async createProduct(body) {
    return await this.apiHelper.postData('PRODUCTS', body)
  }

  async deleteProduct(id) {
    return await this.apiHelper.delete('PRODUCTS', id)
  }

}
