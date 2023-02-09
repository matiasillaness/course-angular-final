import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnoComponent } from './form-alumno.component';

describe('FormAlumnoComponent', () => {
  let component: FormAlumnoComponent;
  let fixture: ComponentFixture<FormAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
