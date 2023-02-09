import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAlumnoComponent } from './grid-alumno.component';

describe('GridAlumnoComponent', () => {
  let component: GridAlumnoComponent;
  let fixture: ComponentFixture<GridAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
