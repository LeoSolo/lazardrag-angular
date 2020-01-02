import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {NewsComponent} from './news/news.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RightPanelComponent} from './right-panel/right-panel.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        MainMenuComponent,
        NewsComponent,
        MainPageComponent,
        RightPanelComponent,
        ShopComponent,
        AboutComponent
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
