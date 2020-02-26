import {Injectable} from "@angular/core";
import {ApiHelper} from "../Helpers/api/api.helper";
import {ISlide} from "../models/ISlide";

@Injectable({
  providedIn: 'root'
})

export class SlidesService {

  constructor(
    private apiHelper: ApiHelper
  ){}

  async getSlides(): Promise<ISlide[]> {
    return await this.apiHelper.getData('SLIDES')
      .then(response => response.json())
  }

}
