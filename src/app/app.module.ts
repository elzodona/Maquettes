import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './restaurant/caissier/acceuil/menu/menu.component';
import { FoodsComponent } from './restaurant/caissier/acceuil/foods/foods.component';
import { DrinksComponent } from './restaurant/caissier/acceuil/drinks/drinks.component';
import { DessertsComponent } from './restaurant/caissier/acceuil/desserts/desserts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FoodsComponent,
    DrinksComponent,
    DessertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
