import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {
  /**
   * 轉換語系
   * @param value 帶轉換語言
   * @param obj 語系包
   */
  transform(value: string, obj: any) {
    return (!obj || !obj[value]) ? value : obj[value];
  }

}
