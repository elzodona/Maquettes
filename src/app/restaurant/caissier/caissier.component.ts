import { Component, EventEmitter, Input } from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { AccueilticketComponent } from './accueil/accueilticket/accueilticket.component';
import { FormBuilder } from '@angular/forms';
import { DessertsComponent } from './accueil/desserts/desserts.component';
import { DrinksComponent } from './accueil/drinks/drinks.component';
import { AccueilComponent } from './accueil/accueil.component';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent {
  @Input() navs!: string
  @Input() ticketOrder : any
  navigation: string = 'accueil'

  @ViewChild(AccueilticketComponent) accueilticketComponent!: AccueilticketComponent;
  @ViewChild(AccueilComponent) accueilComponent!: AccueilComponent;


  constructor(private fb: FormBuilder){}

  
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

  test2(coms: any) {

    if (coms.selected == true) {
      this.accueilticketComponent.ajouterPlat(coms.nom, coms.prix)

    }else{
      // console.log(coms);
      const plats = this.accueilticketComponent.plats.value;
      // console.log(plats);
      const toSup = plats.findIndex((plat:any) => plat.nom == coms.nom)
      // console.log(toSup);
      this.accueilticketComponent.supprimerPlat(toSup)

    }

    // const plats = this.accueilticketComponent.plats;
    // const newPlat = this.fb.group({
    //   nom: coms.nom,
    //   prix: coms.prix
    // });
    // plats.push(newPlat);
  }

  addDesserts(dess: any) {

    if (dess.selected == true) {
      this.accueilticketComponent.ajouterPlat(dess.nom, dess.prix)

    } else {
      // console.log(coms);
      const plats = this.accueilticketComponent.plats.value;
      // console.log(plats);
      const toSup = plats.findIndex((plat: any) => plat.nom == dess.nom)
      // console.log(toSup);
      this.accueilticketComponent.supprimerPlat(toSup)

    }
  }

  deselect(nom: string) {
    const drinksComponent = this.accueilComponent.drinksComponent;
    const dessertsComponent = this.accueilComponent.dessertsComponent;

    if (drinksComponent && drinksComponent.drinks) {
      const drinkItem = drinksComponent.drinks.find((drink: any) => drink.nom === nom);
      if (drinkItem) {
        drinksComponent.updateItemStateByNom(nom);
        return;
      }
    }

    if (dessertsComponent && dessertsComponent.desserts) {
      const dessertItem = dessertsComponent.desserts.find((dessert: any) => dessert.nom === nom);
      if (dessertItem) {
        dessertsComponent.updateItemStateByNom(nom);
        return;
      }
    }

  }



}

