import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ProductsService} from "../../../services/products.service";
import {productTypesEnum} from '../../../models/ProductTypesEnum';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.less'],
  providers: [ProductsService]
})

export class CreateProductModalComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  typesArr: string[] = [
    'Браслеты', 'Сумки', 'Чехлы'
  ];

  productForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl(null),
    image: new FormControl(''),
    price: new FormControl(null)
  });

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  async onSubmit() {
    await this.createProduct();
    this.cancel.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  changeType(value: string) {
    this.productForm.value.type = productTypesEnum[value];
  }

  async createProduct() {
    await this.productService.createProduct(this.productForm.value);
  }

}
