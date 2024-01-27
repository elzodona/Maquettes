import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilticketComponent } from './accueilticket.component';

describe('AccueilticketComponent', () => {
  let component: AccueilticketComponent;
  let fixture: ComponentFixture<AccueilticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilticketComponent]
    });
    fixture = TestBed.createComponent(AccueilticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
