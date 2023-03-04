import { TestBed } from '@angular/core/testing';

import { RecursosAlumnoService } from './recursos-alumno.service';

describe('RecursosAlumnoService', () => {
  let service: RecursosAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursosAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
