import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosBusqueda } from './resultados-busqueda';

describe('ResultadosBusqueda', () => {
  let component: ResultadosBusqueda;
  let fixture: ComponentFixture<ResultadosBusqueda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadosBusqueda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosBusqueda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
