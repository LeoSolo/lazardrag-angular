import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainHeaderComponent} from './common/main-header/main-header.component';
import {MainMenuComponent} from './common/main-header/main-menu/main-menu.component';
import {NewsComponent} from './news-page/news.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RightPanelComponent} from './right-panel/right-panel.component';
import {ShopComponent} from './shop-page/shop.component';
import {AboutComponent} from './about-page/about.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import { AuthorizationComponent } from './common/authorization/authorization.component';
import { LoaderComponent } from './common/loader/loader.component';
import { SliderComponent } from './common/slider/slider.component';
import { SearchComponent } from './common/main-header/main-menu/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        MainMenuComponent,
        NewsComponent,
        MainPageComponent,
        RightPanelComponent,
        ShopComponent,
        AboutComponent,
        AdminPageComponent,
        AuthorizationComponent,
        LoaderComponent,
        SliderComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
