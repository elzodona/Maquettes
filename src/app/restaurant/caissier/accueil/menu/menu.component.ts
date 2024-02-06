import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output() chosenMenu = new EventEmitter
  selectedMenu : any;

  menu: any = [
    {
      id : '1',
      nom : 'menu 1',
      contents : 
      {
        'plat': 
        {
          photo : 'assets/Restaurant/Plats/yassa_poulet.jpeg',
          nom : 'yassa_poulet',
        },

        'drink': 
        {
          photo : 'assets/Restaurant/Drinks/COCA COLA 33CL.png',
          nom : 'coca cola'
        },
        // 'dessert': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      },
      prix : '1500'
    },
      
    {
      id : '2',
      nom : 'menu 2',
      contents : 
      {
        'plat': 
        {
          photo : 'assets/Restaurant/Plats/thiebou_dieun.jpeg',
          nom : 'thiebou_diene',
        },

        'drink': 
        {
          photo : 'assets/Restaurant/Drinks/CRISTALINE 50CL.png',
          nom : 'cristaline 50cl'
        },

        'dessert': {
          photo : 'assets/Restaurant/Desserts/TIRAMISU CARAMEL.png',
          nom : 'tiramisu caramel'
        },
        // 'dessert': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      },
      prix : '1500'
    },

    {
      id : '3',
      nom : 'menu 3',
      contents : 
      {
        'plat': 
        {
          photo : 'assets/Restaurant/Plats/firire.jpeg',
          nom : 'firire',
        },

        'drink': 
        {
          photo : 'assets/Restaurant/Drinks/OASIS POMME CASSIS 33CL.png',
          nom : 'oasis pomme cassis 33cl'
        },

        'dessert': {
          photo : 'assets/Restaurant/Desserts/TIRAMISU DAIM.png',
          nom : 'tiramisu daim'
        },
        // 'dessert': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      },
      prix : '1500'
    },


    {
      id : '4',
      nom : 'menu 4',
      contents : 
      {
        'plat': 
        {
          photo : 'assets/Restaurant/Plats/maffé.jpeg',
          nom : 'maffé',
        },

        'drink': 
        {
          photo : 'assets/Restaurant/Drinks/FANTA ORANGE 33CL.png',
          nom : 'fanta orange'
        },

        'dessert': {
          photo : 'assets/Restaurant/Desserts/TIRAMISU OREO.png',
          nom : 'tiramisu oreo'
        },
        // 'dessert': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      },
      prix : '1500'
    },


    {
      id : '5',
      nom : 'menu 5',
      contents : 
      {
        'plat': 
        {
          photo : 'assets/Restaurant/Plats/thiou_yapp.jpeg',
          nom : 'thiou yapp',
        },

        'drink': 
        {
          photo : 'assets/Restaurant/Drinks/COCA COLA CHERRY 33CL.png',
          nom : 'coca cola'
        },

        'dessert': {
          photo : 'assets/Restaurant/Desserts/TIRAMISU SPECULOOS NUTELLA.png',
          nom : 'tiramisu speculoos nutella'
        },
        // 'dessert': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      },
      prix : '1500'
    },

  ];


  chooseMenu(item : any){
      if (item.selected == undefined || !item.selected) {
  
        if (this.selectedMenu == null) {
          this.selectedMenu = [];
        }
        item.selected = true;

        this.selectedMenu.push(item);
        // console.log(item);
  
      } else {
        item.selected = false;
        // console.log(item);
        this.selectedMenu = this.selectedMenu.filter((selectedItem: any) => selectedItem.nom !== item.nom);
      }
      localStorage.setItem('selectedMenu', JSON.stringify(this.selectedMenu));
      this.chosenMenu.emit(item)
      
    }


    updateItemStateByNom(nom: string): void {
      const itemToUpdate = this.selectedMenu.find((dessert: any) => dessert.nom === nom);
      // console.log(itemToUpdate);
      if (itemToUpdate) {
        itemToUpdate.selected = false;
        this.selectedMenu = this.selectedMenu.filter((selectedItem: any) => selectedItem.nom !== nom);
        localStorage.setItem('selectedDesserts', JSON.stringify(this.selectedMenu));
  
      }
    }


  
}
