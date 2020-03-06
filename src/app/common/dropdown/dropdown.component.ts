import {Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class DropdownComponent implements OnInit {

  @Input() options: string[];
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("dropdownList", {static: false}) dropdownList: ElementRef;
  chosenOption: string;
  isOpened: boolean = false;

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target))
      this.dropdownClose();
  }

  dropdownOpen() {
    this.isOpened = true;
  }

  dropdownClose() {
    this.isOpened = false;
  }

  setChosenOption(value) {
    this.chosenOption = value;
    this.saveChanges(value);
    this.dropdownClose();
  }

  saveChanges(value) {
    this.onChange.emit(value);
  }

}
