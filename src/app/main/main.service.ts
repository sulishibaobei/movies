import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Type } from '../type';
@Injectable()
export class MainService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private recentUrl = 'api/recent';  // URL to web api
    constructor(private http: Http) { }
    getRecent(): Promise<Type[]> {
        return this.http.get(this.recentUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    /**
   * 
   * @param res 处理数据的方法  返回res object
   */
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    /**
     * 
     * @param error 处理错误的方法
     */
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body["error"] || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    }
}