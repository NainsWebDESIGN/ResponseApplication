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
    getJson(rouID: number): Observable<ResponeData> {
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
    returnData(obj: HttpResponse<any>, url: string): ResponeData {
        return {
            err: {
                error: null,
                msg: null
            } as ResponseError,
            url: url,
            ret: obj
        }
    }
    returnError(err: HttpErrorResponse): Observable<ResponeData> {
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
