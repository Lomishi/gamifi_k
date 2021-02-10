import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInicialComponent } from './registro-inicial.component';

describe('RegistroInicialComponent', () => {
  let component: RegistroInicialComponent;
  let fixture: ComponentFixture<RegistroInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
