import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleChanceComponent } from './double-chance.component';

describe('DoubleChanceComponent', () => {
  let component: DoubleChanceComponent;
  let fixture: ComponentFixture<DoubleChanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleChanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
