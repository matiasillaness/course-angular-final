import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'nombreCompleto',
  pure: false
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno): string {
    const nombre = value.nombre || '';
    const apellido = value.apellido || '';
    return `${nombre} ${apellido}`;
  }

}
