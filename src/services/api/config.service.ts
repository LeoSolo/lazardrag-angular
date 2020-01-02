import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Http, Response, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) {
    }

    // private getRequestOptions(): RequestOptions {
    //
    //     const headers = {'Content-Type': 'application/json'};
    //
    //     const token = window.localStorage['tokenKey'];
    //     if (token) {
    //         headers['Authorization'] = 'JWT ' + token;
    //     }
    //     return new RequestOptions({
    //         headers: new Headers(headers)
    //     });
    // }
}
