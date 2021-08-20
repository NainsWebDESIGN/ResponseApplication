import { Injectable } from '@angular/core';
import { ResponseError, ResponeData } from '@ts/interface';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    lang: any;
    constructor(private http: HttpClient) { }
    getApi(rouID: number): Observable<ResponeData> {
        let url = `assets/${rouID}.json`;
        return this.http.get(url)
            .map((data: HttpResponse<any>) => this.returnData(data, url))
            .catch((err: HttpErrorResponse) => this.returnError(err))
    }
    getLang(lang: string) {
        let url = `assets/${lang}.json`;
        this.http.get(url).subscribe(
            lang => this.lang = lang,
            err => console.log(`Lang Error`)
        )
    }
    postApi(rouID: string, obj: any): Observable<ResponeData> {
        let url = `php/everything.php?getWay=${rouID.substr(0, 3)}`,
            body = this.postForm(obj);
        return this.http.post(url, body)
            .map((data: HttpResponse<any>) => this.returnData(data, url))
            .catch((err: HttpErrorResponse) => this.returnError(err))
    }
    private postForm(obj) {
        let data = new FormData();
        Object.keys(obj).forEach(item => data.append(item, obj[item]));
        return data;
    }
    private returnData(obj: HttpResponse<any>, url: string): ResponeData {
        return {
            err: {
                error: null,
                msg: null
            } as ResponseError,
            url: url,
            ret: obj
        }
    }
    private returnError(err: HttpErrorResponse): Observable<ResponeData> {
        return Observable.throw({
            err: {
                error: err.error,
                msg: "Service Error"
            } as ResponseError,
            url: err.url,
            ret: err
        })
    }
}
