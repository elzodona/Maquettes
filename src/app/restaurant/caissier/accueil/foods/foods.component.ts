import { Component } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {

  foodArticle: any;
  foods : any = [
    {
      type : 'Accompagnements',
      contents : [
        {
          'images': 'assets/Restaurant/Accompagnements/ACCRAS.png',
          'name' : 'Accra',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/ALOKO.png',
          'name' : 'Aloko',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/FRITE.png',
          'name' : 'Frite',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/NEMS.png',
          'name' : 'Nems',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/PATATE DOUCE.png',
          'name' : 'Patate Douce',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/salade légumes.jpeg',
          'name' : 'Salade légumes',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/SAMOUSSA.png',
          'name' : 'Samoussa',
          'price': 1500
        }
    ]},

    {
      type : 'Plats',
      contents : [{
          'images': '',
          'name' : '',
          'price': ''
      }]
    },

    {
      type : 'Grillades',
      contents : [{
          'images': '',
          'name' : '',
          'price': ''
      }]
    },

    {
      type : 'Supplements',
      contents : [{
          'images': '',
          'name' : '',
          'price': ''
      }]
    },

    {
      type : 'Sauces',
      contents : [{
          'images': '',
          'name' : '',
          'price': ''
      }]
    }
  ];

  ngOnInit(){
    this.foodArticle = this.foods.filter((e : any) =>e.type == "Accompagnements")[0].contents;
  }

  SelectCategorie(event : any){
    let gottenArticle = event.target[event.target.selectedIndex].text;
    this.foodArticle = this.foods.filter((e : any) =>e.type == gottenArticle)[0].contents;
    console.log(this.foodArticle);
  }
}
