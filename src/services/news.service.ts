import {Injectable} from "@angular/core";
import {ApiHelper} from "../Helpers/api/api.helper";
import {INews} from "../models/INews";

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(
    private apiHelper: ApiHelper
  ){}

  async getNews(): Promise<INews[]> {
    return await this.apiHelper.getData('NEWS')
      .then(response => response.json())
  }

}
