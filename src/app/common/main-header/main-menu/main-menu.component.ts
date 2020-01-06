import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {
    isAdminPage = false;

    constructor(private location: Location) {
    }

    ngOnInit() {
        this.isAdminPage = this.location.path().toString() === '/admin';
    }

}
