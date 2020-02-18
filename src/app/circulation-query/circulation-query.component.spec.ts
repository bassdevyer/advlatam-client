import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationQueryComponent } from './circulation-query.component';

describe('CirculationQueryComponent', () => {
  let component: CirculationQueryComponent;
  let fixture: ComponentFixture<CirculationQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculationQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculationQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
