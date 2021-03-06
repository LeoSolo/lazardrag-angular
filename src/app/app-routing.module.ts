import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {NewsComponent} from './news-page/news.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about-page/about.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {ProductCardComponent} from "./product-card/product-card.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'card/:id',
    component: ProductCardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
