import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoaderService} from "../../../services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  loadingSubscription: Subscription;
  isVisible: boolean = false;

  constructor(
    private loadingService: LoaderService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadingSubscription = this.loadingService.loading$.pipe().subscribe((status: boolean) => {
      this.isVisible = status;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
