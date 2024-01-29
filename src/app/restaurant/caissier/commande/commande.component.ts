import { Component } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {

  nav! : string 

  ngOnInit(){
    this.nav = "surPlace"
  }



  surPlace(){
      this.nav = 'surPlace'
  }

  aLivrer(){
    this.nav = 'aLivrer'
  }
}
