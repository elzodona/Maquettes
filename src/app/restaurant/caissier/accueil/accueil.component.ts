import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  nav: string='foods'

  menu()
  {
    this.nav = 'menu'
  }

  foods()
  {
    this.nav = 'foods'
  }

  desserts()
  {
    this.nav = 'desserts'
  }

  drinks()
  {
    this.nav = 'drinks'
  }

}
