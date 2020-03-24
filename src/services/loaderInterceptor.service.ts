import {Injectable} from "@angular/core";
import {LoaderService} from "./loader.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoaderInterceptorService implements HttpInterceptor{

  activeRequests: number = 0;

  constructor(
    private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('TEST');

    if (this.activeRequests === 0) {
      this.loaderService.startLoading();
      console.log('START LOADING');
    }

    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loaderService.stopLoading();
          console.log('STOP LOADING');
        }
      })
    )
  }

}
