import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {ProductsService} from "../../../services/products.service";
import {productTypesEnum, productSubTypes} from '../../../models/ProductTypesEnum';
import {IProduct} from "../../../models/IProduct";

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.less'],
  providers: [ProductsService]
})

export class CreateProductModalComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Input() product: IProduct;
  typesArr: string[] = [];
  subTypesArr: string[] = [];
  submitted: boolean = false;
  productForm: FormGroup;
  isEdit: boolean = false;
  productTypesEnum: any = productTypesEnum;
  productSubTypes: string[][] = productSubTypes;
  confirmModalShown: boolean = false;

  constructor(private productService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    let tags = '';
    this.isEdit = !!this.product;

    if (this.isEdit && this.product.tags) {
      for (let i = 0; i < this.product.tags.length; i++) {
        tags += ' ' + this.product.tags[i];
      }
    }

    this.productForm = this.formBuilder.group({
      title: this.isEdit ? [this.product.title, Validators.required] : [null, Validators.required],
      description: this.isEdit ? [this.product.description] : [''],
      type: this.isEdit ? [this.product.type, Validators.required] : [null, Validators.required],
      image: this.isEdit ? [this.product.image] : [''],
      price: this.isEdit ? [this.product.price, Validators.required] : [null, Validators.required],
      size: this.isEdit ? [this.product.size] : [''],
      subType: this.isEdit ? [this.product.subType, Validators.required] : [null, Validators.required],
      tags: tags.length ? [tags] : ['']
    });

    this.getTypes();
    this.isEdit && this.getSubTypes();
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

  async onSubmit(e?) {
    if (e) e.preventDefault();
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    this.isEdit ?
      await this.updateProduct() : await this.createProduct();
    this.onCancel();
  }

  onCancel() {
    this.submitted = false;
    this.cancel.emit();
  }

  confirmModalTrigger(e?) {
    if (e) e.preventDefault();
    this.confirmModalShown = !this.confirmModalShown;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id);
    this.confirmModalTrigger();
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
    let product = this.productForm.value;
    product.tags = [];
    await this.productService.createProduct(this.productForm.value);
  }

  async updateProduct() {
    let product = this.productForm.value;
    product.id = this.product.id;
    await this.productService.updateProduct(product);
  }

  onLoadImage(imageBase64: string) {
    this.productForm.patchValue({
      image: imageBase64
    });
  }

}
