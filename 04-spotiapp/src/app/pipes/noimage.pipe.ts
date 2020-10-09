import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if{!images}{
      return 'assets/img/no-image.png';
    }
    return null;
  }

}
