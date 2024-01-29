import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeticketComponent } from './commandeticket.component';

describe('CommandeticketComponent', () => {
  let component: CommandeticketComponent;
  let fixture: ComponentFixture<CommandeticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeticketComponent]
    });
    fixture = TestBed.createComponent(CommandeticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
