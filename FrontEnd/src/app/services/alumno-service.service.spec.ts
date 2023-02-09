import { TestBed } from '@angular/core/testing';

import { AlumnoServiceService } from './alumno-service.service';

describe('AlumnoServiceService', () => {
  let service: AlumnoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
