import { Injectable } from '@angular/core';

@Injectable()
export class App {
    static find(arr: any[], key: string, value: string | number) {
        return arr.findIndex(el => el[key] == value);
    }
}
