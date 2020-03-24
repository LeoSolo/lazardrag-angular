import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.less']
})
export class AlertModalComponent implements OnInit {

  @Input() text: string;
  @Output() onCancel = new EventEmitter();
  @Output() onConfirm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.onCancel.emit();
  }

  submit() {
    this.onConfirm.emit();
  }

}
