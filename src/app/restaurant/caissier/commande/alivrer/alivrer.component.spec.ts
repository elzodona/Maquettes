import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlivrerComponent } from './alivrer.component';

describe('AlivrerComponent', () => {
  let component: AlivrerComponent;
  let fixture: ComponentFixture<AlivrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlivrerComponent]
    });
    fixture = TestBed.createComponent(AlivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
