import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplaceticketComponent } from './surplaceticket.component';

describe('SurplaceticketComponent', () => {
  let component: SurplaceticketComponent;
  let fixture: ComponentFixture<SurplaceticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurplaceticketComponent]
    });
    fixture = TestBed.createComponent(SurplaceticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
