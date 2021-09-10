import { Injectable } from '@angular/core';

@Injectable()
export class App {
    static text: string | number;
    static find(obj) {
        let arr = obj["obj"], key = obj["key"];
        return arr.findIndex(el => el[key] == this.text);
    }
}
