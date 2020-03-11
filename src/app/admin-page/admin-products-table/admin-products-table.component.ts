import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrls: ['./admin-products-table.component.less']
})
export class AdminProductsTableComponent implements OnInit {

  cols: string[] = [
    'Id', 'Заголовок', 'Описание', 'Тип', 'Подтип', 'Цена', 'Фото'
  ];

  constructor() { }

  ngOnInit() {
  }

}
