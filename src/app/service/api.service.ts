import { Injectable } from '@angular/core';
import { ResponeData, ResponseError } from '@ts/interface';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }
    getTest(test?): Observable<ResponeData> {
        let url = `assets/${test}.json`;
        return this.http.get(url)
            .map((data: HttpResponse<any>) => this.returnData(data, url))
            .catch((err: HttpErrorResponse) => this.returnErr(err))
    }
    returnData(data: any, url: string): ResponeData {
        return {
            err: {
                error: null,
                msg: null
            } as ResponseError,
            url: url,
            status: ([undefined, null, ""].indexOf(data) == -1 && data.length !== 0 && Object.keys(data).length !== 0),
            ret: data
        }
    }
    returnErr(Error: HttpErrorResponse): Observable<ResponeData> {
        return Observable.throw({
            err: {
                error: Error.error,
                msg: Error.message
            } as ResponseError,
            url: Error.url,
            status: false,
            ret: Error
        });
    }
}
