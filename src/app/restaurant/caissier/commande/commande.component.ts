import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommandeticketComponent } from './commandeticket/commandeticket.component';

@Component({
  selector: 'app-commande',
  // template: `<app-commandeticket [changeComTicket]="nav"></app-commandeticket>`,
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})

export class CommandeComponent {
  @Output() navs = new EventEmitter<string>;
  @Output() ticketSurplace = new EventEmitter;
  // @ViewChild(CommandeticketComponent) comticketcomp! : CommandeticketComponent;

  nav! : string;

  ngOnInit() {
    this.nav = "surPlace";
    this.navs.emit(this.nav);
  }

  recupTicket(data: any) {
    this.ticketSurplace.emit(data);
  }
  
  

  surPlace(){
      this.nav = 'surPlace';
      this.navs.emit(this.nav);
  }

  aLivrer(){
    this.nav = 'aLivrer';
    this.navs.emit(this.nav);
  }
}
