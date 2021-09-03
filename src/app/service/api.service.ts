import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseData } from '@ts/interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    lang: string = 'zh-tw';
    langChart: any;
    mode: boolean = false;
    constructor(private http: HttpClient) { }
    changeLanguage(lang: string) {
        this.http.get(`assets/${lang}.json`)
            .subscribe(Lang => this.langChart = Lang);
    }
    postApi(getWay: string | number, obj?: any): Observable<ResponseData> {
        let header = this.formateHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }), option = { headers: header }, // 協定
            data = (obj) ? this.http.post(`php/system.php?getWay=${getWay}`, this.formateObj(obj), option) : this.http.get(`assets/${getWay}.json`);
        return this.formateData(data);
    }
    private formateData(obj: Observable<any>): Observable<ResponseData> {
        return obj.map((el: HttpResponse<any>) => this.SuccesData(el))
            .catch((err: HttpErrorResponse) => this.ErrorData(err));
    }
    private formateHeaders(obj: any): HttpHeaders {
        let data = new HttpHeaders();
        Object.keys(obj).forEach(item => data.append(item, obj[item]));
        return data;
    }
    private formateObj(obj: any): FormData {
        let data = new FormData();
        Object.keys(obj).forEach(item => data.append(item, obj[item]));
        return data;
    }
    private SuccesData(obj: HttpResponse<any>): ResponseData {
        return {
            status: true,
            err: "OK",
            ret: obj
        }
    }
    private ErrorData(obj: HttpErrorResponse): Observable<ResponseData> {
        return Observable.throw({
            status: false,
            err: "Server Error",
            ret: obj
        })
    }
}