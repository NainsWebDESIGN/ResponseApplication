import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {

  transform(value: string, obj: any) {
    return (!obj || !obj[value]) ? value : obj[value];
  }

}
