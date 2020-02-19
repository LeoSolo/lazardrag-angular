import URLS from './urls';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ApiHelper{

  public async getData(direction, params?) {
    return await fetch(URLS.API.API + URLS.API[direction], params);
  }

}
