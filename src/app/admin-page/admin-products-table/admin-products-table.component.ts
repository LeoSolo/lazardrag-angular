import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {productTypesEnum, productSubTypes} from '../../../models/ProductTypesEnum';
import {ProductsService} from "../../../services/products.service";
import {IProduct} from "../../../models/IProduct";

@Component({
  selector: 'app-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrls: ['./admin-products-table.component.less'],
  providers: [ProductsService]
})
export class AdminProductsTableComponent implements OnInit {

  @Output() edit: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  cols: string[] = [
    '№', 'Заголовок', 'Описание', 'Тип', 'Подтип', 'Цена', 'Фото'
  ];
  chosenType: number = 0;
  typesArr: string[] = [];
  products: IProduct[] = [];
  loading: boolean = false;
  productTypesEnum: any = productTypesEnum;
  productSubTypes: any = productSubTypes;

  constructor(private productService: ProductsService) { }

  async ngOnInit() {
    this.getTypes();
    await this.getProductsList();
  }

  async changeType(val) {
    this.chosenType = productTypesEnum[val];
    await this.getProductsList();
  }

  getTypes() {
    let temp = Object.entries(productTypesEnum);
    temp = temp.splice(temp.length/2);

    for(let i = 0; i < temp.length; i++) {
      this.typesArr.push(temp[i][0]);
    }
  }

  async getProductsList() {
    this.products = await this.productService.getProducts('type=' + this.chosenType)
      .then(res => {
        this.loading = false;
        return res;
      });
  }

  editModalTrigger(product) {
    this.edit.emit(product);
  }

}
