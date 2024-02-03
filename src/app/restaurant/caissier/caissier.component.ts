import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent {
  @Input() navs!: string
  @Input() ticketOrder : any

  
  navigation: string= 'commande'

  
  recupTicketFromCom(data :any){
    this.ticketOrder = data
  }
  
  getFromChild(data : any){
    this.navs = data;
  }


  accueil()
  {
    this.navigation = 'accueil'
  }

  commande()
  {
    this.navigation = 'commande'
  }

  reservation()
  {
    this.navigation = 'reservation'
  }

}
