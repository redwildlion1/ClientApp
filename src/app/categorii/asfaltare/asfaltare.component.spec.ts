/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsfaltareComponent } from './asfaltare.component';

describe('AsfaltareComponent', () => {
  let component: AsfaltareComponent;
  let fixture: ComponentFixture<AsfaltareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsfaltareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsfaltareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
