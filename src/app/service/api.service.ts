import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseData } from '@ts/interface';
import { ErrorTranslate } from '@ts/translate';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    /** 語系 */
    private lang: string = 'zh-tw';
    /** 語系包 */
    langChart: any = {};
    /** 日夜模式 */
    mode: boolean = false;
    TopStatus: boolean = false;
    constructor(private http: HttpClient) { }
    /** 設定語言及語系包 */
    set _lang(lang: string) {
        let _Lang = this.lang;
        this.lang = lang;
        this.http.get(`assets/${lang}.json`)
            .retry(2)
            .timeout(30000)
            .catch((err: HttpErrorResponse) => {
                alert(ErrorTranslate[_Lang]["langError"]);
                return this.ErrorData(err, "Language");
            })
            .subscribe(
                (langData: HttpResponse<any>) => this.langChart = langData,
                (err: HttpErrorResponse) => console.log(err)
            );
    }
    /** 取得語言 */
    get _lang(): string {
        return this.lang;
    }
    /**
     * Ajax
     * @param getWay Ajax的檔案或php的參數(必填)
     * @param obj post時的資料(選填)
     */
    postApi(getWay: string | number, obj?: any): Observable<ResponseData> {
        let header = this.formateObj({ 'Content-Type': 'application/json; charset=UTF-8' }) as HttpHeaders,
            option = { headers: header }, // 協定
            data = (obj) ?
                this.http.post(`php/system.php?getWay=${getWay}`, this.formateObj(obj), option) :
                this.http.get(`assets/${getWay}.json`);

        return this.formateData(data);
    }
    /**
     * 處理並返回Ajax取得的資料或錯誤
     * @param obj 取得的資料<Observable>
     */
    private formateData(ResponseObservable: Observable<any>): Observable<ResponseData> {
        return ResponseObservable
            .retry(2)
            .timeout(30000)
            .map((el: HttpResponse<any>) => this.SuccesData(el))
            .catch((err: HttpErrorResponse) => this.ErrorData(err, "Server"));
    }
    /**
     * 處理post協定或是物件表單
     * @param obj Content-Type或是post物件
     */
    private formateObj(obj: any): FormData | HttpHeaders {
        let key = Object.keys(obj), data;
        switch (key[0]) {
            case 'Content-Type': data = new HttpHeaders(); break;
            default: data = new FormData(); break;
        }
        key.forEach(item => data.append(item, obj[item]));
        return data;
    }
    /**
     * 請求成功時的物件處理
     * @param obj 取得的資料
     */
    private SuccesData(obj: HttpResponse<any>): ResponseData {
        return {
            status: true,
            err: "OK",
            ret: obj
        }
    }
    /**
     * 請求失敗時的物件處理
     * @param obj 取得的資料
     */
    private ErrorData(obj: HttpErrorResponse, component: string): Observable<ResponseData> {
        return Observable.throw({
            status: false,
            err: `${component} Error`,
            ret: obj
        })
    }
}