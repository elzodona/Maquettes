import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplaceComponent } from './surplace.component';

describe('SurplaceComponent', () => {
  let component: SurplaceComponent;
  let fixture: ComponentFixture<SurplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurplaceComponent]
    });
    fixture = TestBed.createComponent(SurplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
