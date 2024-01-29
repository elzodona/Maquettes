import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: any = [
    {
      'plat': 'assets/Restaurant/Plats/yassa_poulet.jpeg',
      'drink': 'assets/Restaurant/Drinks/COCA COLA 33CL.png',
      // 'dessert': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      'name': 'Menu 1',
      'price': 1500
    },

    {
      'plat': 'assets/Restaurant/Plats/thiebou_dieun.jpeg',
      'drink': 'assets/Restaurant/Drinks/CRISTALINE 50CL.png',
      'dessert': 'assets/Restaurant/Desserts/TIRAMISU CARAMEL.png',
      'name': 'Menu 2',
      'price': 1500
    },

    {
      'plat': 'assets/Restaurant/Plats/firire.jpeg',
      'drink': 'assets/Restaurant/Drinks/OASIS POMME CASSIS 33CL.png',
      'dessert': 'assets/Restaurant/Desserts/TIRAMISU DAIM.png',
      'name': 'Menu 3',
      'price': 1500
    },

    {
      'plat': 'assets/Restaurant/Plats/maffé.jpeg',
      'drink': 'assets/Restaurant/Drinks/FANTA ORANGE 33CL.png',
      'dessert': 'assets/Restaurant/Desserts/TIRAMISU OREO.png',
      'name': 'Menu 4',
      'price': 1500
    },

    {
      'plat': 'assets/Restaurant/Plats/thiou_yapp.jpeg',
      'drink': 'assets/Restaurant/Drinks/COCA COLA CHERRY 33CL.png',
      'dessert': 'assets/Restaurant/Desserts/TIRAMISU SPECULOOS NUTELLA.png',
      'name': 'Menu 5',
      'price': 1500
    },

    // {
    //   'plat': 'assets/Restaurant/Plats/makhal_saloum.jpeg',
    //   'drink': 'assets/Restaurant/Drinks/FANTA CITRON 33CL.png',
    //   'dessert': 'assets/Restaurant/Desserts/FONDANT AU CHOCOLAT.png',
    //   'name': 'Menu 6',
    //   'price': 1500
    // },

    // {
    //   'plat': 'assets/Restaurant/Plats/soupe_kandia.jpeg',
    //   'drink': 'assets/Restaurant/Drinks/MINUTE MAID TROPICAL 33CL.png',
    //   'dessert': 'assets/Restaurant/Desserts/CHEESE CAKE FRUITS ROUGE.png',
    //   'name': 'Menu 7',
    //   'price': 1500
    // },

  ];

}
