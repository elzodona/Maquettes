import { Component } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {

  drinks: any = [
    {
      'images': 'assets/Restaurant/Drinks/COCA COLA 33CL.png',
      'name': 'COCA COLA 33CL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/CRISTALINE 50CL.png',
      'name': 'CRISTALINE 50CL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/FANTA CITRON 33CL.png',
      'name': 'FANTA CITRON 33CL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/FANTA ORANGE 33CL.png',
      'name': 'FANTA ORANGE 33CL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/VIMTO 33CL.png',
      'name': 'VIMTO 33CL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/OASIS TROPICAL 33CL.png',
      'name': 'OASIS TROPICAL 33CL',
      'price': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/SCHWEPPES AGRUM 33CL.png',
      'name': 'SCHWEPPES AGRUM 33CL',
      'price': 1500
    }
  ];

}
