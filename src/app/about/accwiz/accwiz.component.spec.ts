import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccwizComponent } from './accwiz.component';

describe('AccwizComponent', () => {
  let component: AccwizComponent;
  let fixture: ComponentFixture<AccwizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccwizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccwizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
