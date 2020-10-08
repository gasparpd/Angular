import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean= false): string {
    // if (mostrar) {
    //   let idioma: string = '';
    //   for (let index = 0; index < value.length; index++) {
    //     idioma += '*';
    //     return idioma;
    //   }
    // }
    // return value;

    return (mostrar) ? '*'.repeat(value.length):value;
  }

}
