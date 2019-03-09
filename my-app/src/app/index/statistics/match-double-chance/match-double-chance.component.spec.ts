import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDoubleChanceComponent } from './match-double-chance.component';

describe('MatchDoubleChanceComponent', () => {
  let component: MatchDoubleChanceComponent;
  let fixture: ComponentFixture<MatchDoubleChanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDoubleChanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDoubleChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
