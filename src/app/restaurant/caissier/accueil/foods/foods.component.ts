import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {

  foodArticle: any;
  @Output() foodItems = new EventEmitter;
  selectedFoods : any = [];

  foods : any = [
    {
      type : 'Accompagnements',
      contents : [
        {
          'images': 'assets/Restaurant/Accompagnements/ACCRAS.png',
          'nom' : 'Accra',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/ALOKO.png',
          'nom' : 'Aloko',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/FRITE.png',
          'nom' : 'Frite',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/NEMS.png',
          'nom' : 'Nems',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/PATATE DOUCE.png',
          'nom' : 'Patate Douce',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/salade légumes.jpeg',
          'nom' : 'Salade légumes',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Accompagnements/SAMOUSSA.png',
          'nom' : 'Samoussa',
          'prix': 1500
        }
      ]
    },

    {
      type : 'Plats',
      contents: [
        {
          'images': 'assets/Restaurant/Plats/firire.jpeg',
          'nom': 'firire',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/maffé.jpeg',
          'nom': 'Maffé',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/makhal_saloum.jpeg',
          'nom': 'Makhal Saloum',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/makhal_yaap.jpeg',
          'nom': 'Makhal Yaap',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/soupe_kandia.jpeg',
          'nom': 'Soupe Kandia',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/thiebou_dieun.jpeg',
          'nom': 'Thiebou Dieun',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Plats/yassa_poulet.jpeg',
          'nom': 'Yassa Poulet',
          'prix': 1500
        }
      ]
    },

    {
      type : 'Grillades',
      contents: [
        {
          'images': 'assets/Restaurant/Grillades/CUISSE DE POULET.png',
          'nom': 'CUISSE DE POULET',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/POISSON CAPITAINE.png',
          'nom': 'POISSON CAPITAINE',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/POISSON TILAPIA.png',
          'nom': 'POISSON TILAPIA',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/POULET ENTIER.png',
          'nom': 'POULET ENTIER',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Grillades/VIANDE D AGNEAU GRILLE (DIBI SOGO).png',
          'nom': 'Dibi',
          'prix': 1500
        }
      ]
    },

    {
      type : 'Supplements',
      contents: [
        {
          'images': 'assets/Restaurant/Supplements/PERSILLADE VERT.png',
          'nom': 'PERSILLADE VERT',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/PIMENT.png',
          'nom': 'PIMENT',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/SAUCE ROUGE.png',
          'nom': 'SAUCE ROUGE',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/SUPPLEMENT LEGUMES.png',
          'nom': 'LEGUMES',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Supplements/VINAIGRETTE MAISON.png',
          'nom': 'VINAIGRETTE',
          'prix': 1500
        }
      ]
    },

    {
      type : 'Sauces',
      contents: [
        {
          'images': 'assets/Restaurant/Sauces/SAUCE MAFE BOEUF.png',
          'nom': 'MAFE BOEUF',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE MAFE POULET.png',
          'nom': 'MAFE POULET',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE MAFE SIMPLE.png',
          'nom': 'MAFE SIMPLE',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE SAKA SAKA SIMPLE.png',
          'nom': 'SAKA SAKA SIMPLE',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE SOUPE KANDIA SIMPLE.png',
          'nom': 'Patate Douce',
          'prix': 1500
        },

        {
          'images': 'assets/Restaurant/Sauces/SAUCE YASSA SIMPLE.png',
          'nom': 'YASSA SIMPLE',
          'prix': 1500
        }
      ]
    }
  ];


  ngOnInit(){
    this.foodArticle = this.foods.filter((e : any) =>e.type == "Accompagnements")[0].contents;

    let foodInStg = localStorage.getItem("selectedFoods");
    // console.log(foodInStg)
    if(foodInStg){
      let parsedItem = JSON.parse(foodInStg)

      parsedItem.forEach((item: any) => {
        let gottenItem = item.images;
        let findGottenItem = gottenItem.split('/')[2]
      // console.log(findGottenItem);

         this.foods.forEach((elm :any )=>{
            if(elm.type == findGottenItem){
          // console.log(elm.contents)

               elm.contents.forEach((cont : any)=>{
                if(cont.nom == item.nom){
                  cont.selected = true;
                };
              })
            }
         })
      });
    }
  }

  SelectCategorie(event : any){
    let gottenArticle = event.target[event.target.selectedIndex].text;
    this.foodArticle = this.foods.filter((e : any) =>e.type == gottenArticle)[0].contents;
    // console.log(this.foodArticle);
  }

  selectedFood(data : any){
    if(!data.selected || data.selected == undefined){

      if (this.selectedFoods == null) { this.selectedFoods = [] }
      data.selected = true;
      this.selectedFoods.push(data)

    }else{
      data.selected = false
      this.selectedFoods = this.selectedFoods.filter((element:any)=>element.nom !== data.nom)
    }
    localStorage.setItem("selectedFoods", JSON.stringify(this.selectedFoods))
    this.foodItems.emit(data)
  }

  updateItemStateByNom(nom: string): void {
    let found = false;

    this.foods.forEach((food: any) => {
      if (found) return;

      const itemToUpdate = food.contents.find((f: any) => f.nom === nom);
      if (itemToUpdate) {
        itemToUpdate.selected = false;
        this.selectedFoods = this.selectedFoods.filter((selectedItem: any) => selectedItem.nom !== nom);
        localStorage.setItem('selectedFoods', JSON.stringify(this.selectedFoods));
        found = true;
      }
    });
  }



}
