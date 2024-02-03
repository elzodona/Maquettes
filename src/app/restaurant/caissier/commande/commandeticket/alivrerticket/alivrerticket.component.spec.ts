import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlivrerticketComponent } from './alivrerticket.component';

describe('AlivrerticketComponent', () => {
  let component: AlivrerticketComponent;
  let fixture: ComponentFixture<AlivrerticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlivrerticketComponent]
    });
    fixture = TestBed.createComponent(AlivrerticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
