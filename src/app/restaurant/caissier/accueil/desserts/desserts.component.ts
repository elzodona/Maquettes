import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {

  desserts: any = [
    {
      'images': 'assets/Restaurant/Desserts/CHEESE CAKE FRUITS ROUGE.png',
      'nom': 'CHEESE CAKE FRUITS ROUGE',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/FONDANT AU CHOCOLAT AU CARAMEL BEURRE SALE.png',
      'nom': 'FONDANT AU CARAMEL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/TARTE AUX DAIMS.png',
      'nom': 'TARTE AUX DAIMS',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/THIAKRY.jpeg',
      'nom': 'THIAKRY',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/TIRAMISU CARAMEL.png',
      'nom': 'TIRAMISU CARAMEL',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/TIRAMISU OREO.png',
      'nom': 'TIRAMISU OREO',
      'prix': 1500
    },

    {
      'images': 'assets/Restaurant/Desserts/FONDANT AU CHOCOLAT.png',
      'nom': 'FONDANT AU CHOCOLAT',
      'prix': 1500
    }
  ];

  @Output() dess = new EventEmitter;

  selectedDesserts: any[] = [];


  ngOnInit() {
    const storedItems = localStorage.getItem('selectedDesserts');

    if (storedItems) {
      this.selectedDesserts = JSON.parse(storedItems);
      console.log(this.selectedDesserts);

      if (Array.isArray(this.selectedDesserts)) {
        this.selectedDesserts.forEach((selectedItem: any) => {
          const item = this.desserts.find((dessert: any) => dessert.nom == selectedItem.nom);
          if (item) {
            item.selected = true;
          }
        });
      } else {
        console.error("Stored items is not an array:", this.selectedDesserts);
      }
    } else {
      console.error("No stored items found in localStorage");
    }
  }

  selectItem(item: any) {
    if (item.selected == undefined || !item.selected) {

      if (this.selectedDesserts === null) {
        this.selectedDesserts = [];
      }
      item.selected = true;
      this.selectedDesserts.push(item);
      // console.log(item);

    } else {
      item.selected = false;
      // console.log(item);
      this.selectedDesserts = this.selectedDesserts.filter((selectedItem: any) => selectedItem.nom !== item.nom);
    }
    localStorage.setItem('selectedDesserts', JSON.stringify(this.selectedDesserts));
    this.dess.emit(item)
  }

  updateItemStateByNom(nom: string): void {
    const itemToUpdate = this.desserts.find((dessert: any) => dessert.nom === nom);
    // console.log(itemToUpdate);
    if (itemToUpdate) {
      itemToUpdate.selected = false;
      this.selectedDesserts = this.selectedDesserts.filter((selectedItem: any) => selectedItem.nom !== nom);
      localStorage.setItem('selectedDesserts', JSON.stringify(this.selectedDesserts));

    }
  }

}
