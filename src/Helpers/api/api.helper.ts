import URLS from './urls';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ApiHelper{

  public async getData(direction, params?) {
    let url = URLS.API.API + URLS.API[direction];
    if (params) url = url + '?' + params;
    return await fetch(url);
  }

  public async getItemById(direction, id) {
    let url = (URLS.API.API + URLS.API[direction]).split('/search')[0] + '/' + id;
    return await fetch(url);
  }

  public async update(direction, body) {
    let url = (URLS.API.API + URLS.API[direction]).split('/search')[0];
    return await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    });
  }

  public async delete(direction, id) {
    let url = (URLS.API.API + URLS.API[direction]).split('/search')[0] + '/' + id;
    return await fetch(url, {
      method: 'DELETE'
    });
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
