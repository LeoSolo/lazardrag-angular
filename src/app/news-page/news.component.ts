import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {INews} from "../../models/INews";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  news: INews[] = [];
  loading: boolean = true;

  constructor(private newsService: NewsService) { }

  async ngOnInit() {
    this.getNewsList();
  }

  async getNewsList() {
    this.news = await this.newsService.getNews()
      .then(res => {
        this.loading = false;
        return res;
      });
  }

}
