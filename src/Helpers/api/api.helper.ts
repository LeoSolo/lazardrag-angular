import URLS from './urls';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ApiHelper{

  public async getData(direction, params?) {
    let url = URLS.API.API + URLS.API[direction];
    params ? url = url + '?' + params : null;
    return await fetch(url);
  }

  public async getItemById(direction, id) {
    let url = (URLS.API.API + URLS.API[direction]).split('/search')[0] + '/' + id;
    return await fetch(url);
  }

  public async postData(direction, body) {
    return await fetch((URLS.API.API + URLS.API[direction]).split('/search')[0],{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
  }

}
