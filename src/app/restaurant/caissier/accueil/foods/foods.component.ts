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
      ]
    },

    {
      type : 'Plats',
      contents: [
        {
          'images': 'assets/Restaurant/Plats/firire.jpeg',
          'name': 'firire',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/maffé.jpeg',
          'name': 'Maffé',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/makhal_saloum.jpeg',
          'name': 'Makhal Saloum',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/makhal_yaap.jpeg',
          'name': 'Makhal Yaap',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/soupe_kandia.jpeg',
          'name': 'Soupe Kandia',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/thiebou_dieun.jpeg',
          'name': 'Thiebou Dieun',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/yassa_poulet.jpeg',
          'name': 'Yassa Poulet',
          'price': 1500
        }
      ]
    },

    {
      type : 'Grillades',
      contents: [
        {
          'images': 'assets/Restaurant/Grillades/CUISSE DE POULET.png',
          'name': 'CUISSE DE POULET',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/POISSON CAPITAINE.png',
          'name': 'POISSON CAPITAINE',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/POISSON TILAPIA.png',
          'name': 'POISSON TILAPIA',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/POULET ENTIER.png',
          'name': 'POULET ENTIER',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/VIANDE D AGNEAU GRILLE (DIBI SOGO).png',
          'name': 'Dibi',
          'price': 1500
        }
      ]
    },

    {
      type : 'Supplements',
      contents: [
        {
          'images': 'assets/Restaurant/Supplements/PERSILLADE VERT.png',
          'name': 'PERSILLADE VERT',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/PIMENT.png',
          'name': 'PIMENT',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/SAUCE ROUGE.png',
          'name': 'SAUCE ROUGE',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/SUPPLEMENT LEGUMES.png',
          'name': 'LEGUMES',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/VINAIGRETTE MAISON.png',
          'name': 'VINAIGRETTE',
          'price': 1500
        }
      ]
    },

    {
      type : 'Sauces',
      contents: [
        {
          'images': 'assets/Restaurant/Sauces/SAUCE MAFE BOEUF.png',
          'name': 'MAFE BOEUF',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE MAFE POULET.png',
          'name': 'MAFE POULET',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE MAFE SIMPLE.png',
          'name': 'MAFE SIMPLE',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE SAKA SAKA SIMPLE.png',
          'name': 'SAKA SAKA SIMPLE',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE SOUPE KANDIA SIMPLE.png',
          'name': 'Patate Douce',
          'price': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE YASSA SIMPLE.png',
          'name': 'YASSA SIMPLE',
          'price': 1500
        }
      ]
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
