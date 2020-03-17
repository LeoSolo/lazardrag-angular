import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {
    isAdminPage: boolean = false;

    constructor(private location: Location, private router: Router) {
    }

    ngOnInit() {
      this.checkIsAdminPage();
    }

    link() {

    }

    checkIsAdminPage() {
      this.isAdminPage = this.location.path().toString() === '/admin';
    }

    quitAdminPanel() {
      this.router.navigate(['']);
      return false;
    }

}
