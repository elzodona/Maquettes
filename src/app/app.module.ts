import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommandeComponent } from './restaurant/caissier/commande/commande.component';
import { ReservationComponent } from './restaurant/caissier/reservation/reservation.component';
import { AccueilComponent } from './restaurant/caissier/accueil/accueil.component';
import { CaissierComponent } from './restaurant/caissier/caissier.component';
import { ServeurComponent } from './restaurant/serveur/serveur.component';
import { GerantComponent } from './restaurant/gerant/gerant.component';
import { AccueilticketComponent } from './restaurant/caissier/accueil/accueilticket/accueilticket.component';

import { MenuComponent } from './restaurant/caissier/accueil/menu/menu.component';
import { FoodsComponent } from './restaurant/caissier/accueil/foods/foods.component';
import { DessertsComponent } from './restaurant/caissier/accueil/desserts/desserts.component';
import { DrinksComponent } from './restaurant/caissier/accueil/drinks/drinks.component';

import { CommandeticketComponent } from './restaurant/caissier/commande/commandeticket/commandeticket.component';
import { SurplaceComponent } from './restaurant/caissier/commande/surplace/surplace.component';
import { AlivrerComponent } from './restaurant/caissier/commande/alivrer/alivrer.component';

import { RepasComponent } from './restaurant/gerant/repas/repas.component';
import { EmployesComponent } from './restaurant/gerant/employes/employes.component';



@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    ReservationComponent,
    AccueilComponent,
    CaissierComponent,
    ServeurComponent,
    GerantComponent,
    AccueilticketComponent,
    MenuComponent,
    FoodsComponent,
    DessertsComponent,
    DrinksComponent,
    CommandeticketComponent,
    SurplaceComponent,
    AlivrerComponent, 
    RepasComponent,
    EmployesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
