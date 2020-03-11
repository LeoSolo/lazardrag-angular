import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {ProductsService} from "../../../services/products.service";
import {productTypesEnum, productSubTypes} from '../../../models/ProductTypesEnum';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.less'],
  providers: [ProductsService]
})

export class CreateProductModalComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  typesArr: string[] = [];
  subTypesArr: string[] = [];
  submitted: boolean = false;
  productForm: FormGroup;

  constructor(private productService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [''],
      type: [null, Validators.required],
      image: [''],
      price: [null, Validators.required],
      size: [''],
      subType: [null, Validators.required]
    });

    this.getTypes()
  }

  // convenience getter for easy access to form fields
  get form() { return this.productForm.controls }

  getTypes() {
    let temp = Object.entries(productTypesEnum);
    temp = temp.splice(temp.length/2);

    for(let i = 0; i < temp.length; i++) {
      this.typesArr.push(temp[i][0]);
    }
  }

  getSubTypes() {
    this.subTypesArr = productSubTypes[this.productForm.value.type];
  }

  async onSubmit() {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    await this.createProduct();
    this.onCancel();
  }

  onCancel() {
    this.submitted = false;
    this.cancel.emit();
  }

  changeType(value: string) {
    this.productForm.patchValue({
      type: productTypesEnum[value],
      subType: null
    });

    this.getSubTypes();
  }

  changeSubType(value: string) {
    this.productForm.patchValue({
      subType: productSubTypes[this.productForm.value.type].indexOf(value)
    });
  }

  async createProduct() {
    await this.productService.createProduct(this.productForm.value);
  }

}
