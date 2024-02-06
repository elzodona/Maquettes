import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {


  drinks: any = [
    {
      'images': 'assets/Restaurant/Drinks/COCA COLA 33CL.png',
      'nom': 'COCA COLA 33CL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/CRISTALINE 50CL.png',
      'nom': 'CRISTALINE 50CL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/FANTA CITRON 33CL.png',
      'nom': 'FANTA CITRON 33CL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/FANTA ORANGE 33CL.png',
      'nom': 'FANTA ORANGE 33CL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/VIMTO 33CL.png',
      'nom': 'VIMTO 33CL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/OASIS TROPICAL 33CL.png',
      'nom': 'OASIS TROPICAL 33CL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Drinks/SCHWEPPES AGRUM 33CL.png',
      'nom': 'SCHWEPPES AGRUM 33CL',
      'prix': 1500
    }
  ];

  // driks: any
  @Output() com = new EventEmitter;

  selectedDrinks: any[] = [];


  ngOnInit() {
    const storedItems = localStorage.getItem('selectedDrinks');

    if (storedItems) {
      this.selectedDrinks = JSON.parse(storedItems);

      if (Array.isArray(this.selectedDrinks)) {
        this.selectedDrinks.forEach((selectedItem: any) => {
          const item = this.drinks.find((drink: any) => drink.nom === selectedItem.nom);
          if (item) {
            item.selected = true;
          }
        });
      } else {
        console.error("Stored items is not an array:", this.selectedDrinks);
      }
    } else {
      console.error("No stored items found in localStorage");
    }
  }

  selectItem(item: any) {
    if (item.selected == undefined || !item.selected) {

      if (this.selectedDrinks === null) {
        this.selectedDrinks = [];
      }
      item.selected = true;
      this.selectedDrinks.push(item);

    }else{
      item.selected = false;
      this.selectedDrinks = this.selectedDrinks.filter((selectedItem:any) => selectedItem.nom !== item.nom);
    }
    localStorage.setItem('selectedDrinks', JSON.stringify(this.selectedDrinks));
    this.com.emit(item)
  }

  updateItemStateByNom(nom: string): void {
    const itemToUpdate = this.drinks.find((drink: any) => drink.nom === nom);
    // console.log(itemToUpdate);
    if (itemToUpdate) {
      itemToUpdate.selected = false;
      this.selectedDrinks = this.selectedDrinks.filter((selectedItem: any) => selectedItem.nom !== nom);
      localStorage.setItem('selectedDrinks', JSON.stringify(this.selectedDrinks));
    }
  }



}
