import { Component } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {

  desserts: any = [
    {
      'images': 'assets/Restaurant/Desserts/CHEESE CAKE FRUITS ROUGE.png',
      'name': 'CHEESE CAKE FRUITS ROUGE',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/FONDANT AU CHOCOLAT AU CARAMEL BEURRE SALE.png',
      'name': 'FONDANT AU CARAMEL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/TARTE AUX DAIMS.png',
      'name': 'TARTE AUX DAIMS',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      'name': 'THIAKRY',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/TIRAMISU CARAMEL.png',
      'name': 'TIRAMISU CARAMEL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/TIRAMISU OREO.png',
      'name': 'TIRAMISU OREO',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/FONDANT AU CHOCOLAT.png',
      'name': 'FONDANT AU CHOCOLAT',
      'price': 1500
    }
  ];

}
