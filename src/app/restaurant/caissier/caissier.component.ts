import { Component } from '@angular/core';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent {

  navigation: string= 'commande'

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
