import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  nav: string ='foods';
  getFoodItems : any;

  @Output() coms = new EventEmitter;
  @Output() dess = new EventEmitter;
  @Output() fds = new EventEmitter;

  @ViewChild(DrinksComponent) drinksComponent!: DrinksComponent;
  @ViewChild(DessertsComponent) dessertsComponent!: DessertsComponent;



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

  addDrink(com: any)
  {
    // console.log(com);
    this.coms.emit(com);
  }

  addDessert(dess: any) {
    // console.log(com);
    this.dess.emit(dess);
  }

  addFood(food : any){
    this.fds.emit(food);
  }


}
