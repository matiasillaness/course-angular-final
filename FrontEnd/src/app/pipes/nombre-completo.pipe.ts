import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.nombre + ' ' + value.apellido;
  }

}
