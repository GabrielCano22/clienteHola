import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apellido2Component } from './apellido2.component';

describe('Apellido2Component', () => {
  let component: Apellido2Component;
  let fixture: ComponentFixture<Apellido2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apellido2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apellido2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
