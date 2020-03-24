import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainHeaderComponent} from './common/main-header/main-header.component';
import {MainMenuComponent} from './common/main-header/main-menu/main-menu.component';
import {NewsComponent} from './news-page/news.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about-page/about.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AuthorizationComponent} from './common/authorization/authorization.component';
import {LoaderComponent} from './common/loader/loader.component';
import {SliderComponent} from './common/slider/slider.component';
import {SearchComponent} from './common/main-header/main-menu/search/search.component';
import {LeftPanelComponent} from './shop/left-panel/left-panel.component';
import {CreateProductModalComponent} from './admin-page/create-product-modal/create-product-modal.component';
import {ModalComponent} from './common/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownComponent} from './common/dropdown/dropdown.component';
import {AdminProductsTableComponent} from './admin-page/admin-products-table/admin-products-table.component';
import {ImageLoaderComponent} from './common/image-loader/image-loader.component';
import {ProductCardComponent} from './product-card/product-card.component';
import { AlertModalComponent } from './common/alert-modal/alert-modal.component';
import {LoaderInterceptorService} from "../services/loaderInterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainMenuComponent,
    NewsComponent,
    MainPageComponent,
    ShopComponent,
    AboutComponent,
    AdminPageComponent,
    AuthorizationComponent,
    LoaderComponent,
    SliderComponent,
    SearchComponent,
    LeftPanelComponent,
    CreateProductModalComponent,
    ModalComponent,
    DropdownComponent,
    AdminProductsTableComponent,
    ImageLoaderComponent,
    ProductCardComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
