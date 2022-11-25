import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apellido1Component } from './apellido1.component';

describe('Apellido1Component', () => {
  let component: Apellido1Component;
  let fixture: ComponentFixture<Apellido1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apellido1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apellido1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
