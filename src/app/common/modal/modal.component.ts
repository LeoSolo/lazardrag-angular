import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})

export class ModalComponent implements OnInit {

  @Input() text: string;
  @Input() onAction: Function;
  @Input() onDiscard: Function;

  constructor() { }

  ngOnInit() {
  }

}
