import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.less']
})
export class LeftPanelComponent implements OnInit {

  filter: number = null;

  constructor() { }

  ngOnInit() {
  }

  accordionTrigger() {

  }

}
