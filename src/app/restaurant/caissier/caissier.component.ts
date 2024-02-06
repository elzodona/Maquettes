import { Component, Input, EventEmitter, ViewChild } from '@angular/core';
import { AccueilticketComponent } from './accueil/accueilticket/accueilticket.component';
import { FormBuilder } from '@angular/forms';
import { DessertsComponent } from './accueil/desserts/desserts.component';
import { DrinksComponent } from './accueil/drinks/drinks.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './accueil/menu/menu.component';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent {
  @Input() navs!: string
  @Input() ticketOrder : any
  navigation: string = 'accueil';
  getFoodItems : any

  @ViewChild(AccueilticketComponent) accueilticketComponent!: AccueilticketComponent;
  @ViewChild(AccueilComponent) accueilComponent!: AccueilComponent;
  @ViewChild(MenuComponent) menuComponent! : MenuComponent;


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
    const foodsComponent = this.accueilComponent.foodsComponent;
    const menuComponent = this.accueilComponent.menuComponent

    if (drinksComponent && drinksComponent.drinks) {
        drinksComponent.updateItemStateByNom(nom);
        return;
    }

    if (dessertsComponent && dessertsComponent.desserts) {
        dessertsComponent.updateItemStateByNom(nom);
        return;

    }

    if (dessertsComponent && dessertsComponent.desserts) {
      dessertsComponent.updateItemStateByNom(nom);
      return;
    }

    if (foodsComponent && foodsComponent.foods) {
      foodsComponent.updateItemStateByNom(nom);
      return;

    }

    
    if (menuComponent && menuComponent.menu) {
      menuComponent.updateItemStateByNom(nom);
      return;
  }

  }

  addFoods(food : any){
    if(food.selected == true){
      this.accueilticketComponent.ajouterPlat(food.nom, food.prix)

    }else{
      let plats = this.accueilticketComponent.plats.value;
      // console.log(plats);
      let indexItem = plats.findIndex((plat : any) => plat.nom == food.nom)
      // console.log(indexItem);
      this.accueilticketComponent.supprimerPlat(indexItem)
    }
  }

  addMenu(data : any){
    if(data.selected == true){
      this.accueilticketComponent.ajouterPlat(data.nom, data.prix)
    }else{
      // console.log(data)

      let plats = this.accueilticketComponent.plats.value;
      // console.log(plats);
      
      let indexItem = plats.findIndex((plat : any) =>
        plat.nom == data.nom
      )
      // console.log(indexItem);
      
      this.accueilticketComponent.supprimerPlat(indexItem)
      
    }
  }


}

