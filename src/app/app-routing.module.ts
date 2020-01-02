import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {NewsComponent} from './news/news.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';

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
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
