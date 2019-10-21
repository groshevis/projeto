import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioPage } from './intermediario.page';

describe('IntermediarioPage', () => {
  let component: IntermediarioPage;
  let fixture: ComponentFixture<IntermediarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
