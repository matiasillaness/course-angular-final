import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'nombreCompleto',
  pure: false
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): Promise<string> {
    return this.getNombreCompleto(value);
  }

  private async getNombreCompleto(alumno: Alumno): Promise<string> {
    const nombre = alumno.nombre || '';
    const apellido = alumno.apellido || '';
    return `${nombre} ${apellido}`;
  }

}
