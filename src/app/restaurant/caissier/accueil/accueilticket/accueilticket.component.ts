import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-accueilticket',
  templateUrl: './accueilticket.component.html',
  styleUrls: ['./accueilticket.component.css']
})
export class AccueilticketComponent {

  actions : string[] = ['A livrer','Sur place'];
  actionButton : string[] = ['Payer','Enregistrer'];
  button! : string
  hideCostumer : boolean = true
  commandeForm!: FormGroup;
  selectedAction: string = 'Sur place';
  total: number = 0;
  getMenu! : number ;
  gottenMenu : any = [];
  gotData : any = [];

  // @Input() coms: any;
  @Output() nom = new EventEmitter;



  constructor(private fb: FormBuilder)
  {
    this.commandeForm = this.fb.group({
      plats: this.fb.array([
      ])
    });

  }

  ngOnInit(){
    this.button = this.actionButton[0];

    const platss = localStorage.getItem('plats')!;
    const allPlats = JSON.parse(platss);
    // console.log(plats);
    if (allPlats) {
      allPlats.forEach((plat:any) =>
        {
          const platFormGroup = this.fb.group({
            nom: plat.nom,
            quantite: plat.quantite,
            prix: plat.prix
          });
          this.plats.push(platFormGroup);
          this.total += plat.prix
        })
    }

  }

  get plats(): FormArray {
    return this.commandeForm.get('plats') as FormArray;
  }

  ajouterPlat(nom: string, prix: number) {
    const platFormGroup = this.fb.group({
      nom: nom,
      quantite: 1,
      prix: prix
    });
    this.plats.push(platFormGroup);
    this.total = +this.total + +prix

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('plats')!) || [];
    const updatedData = [...dataFromLocalStorage, platFormGroup.value];
    localStorage.setItem('plats', JSON.stringify(updatedData));
  }


  supprimerPlat(index: number)
  {
    const platControl = this.plats.at(index);

    if(platControl){
      const nom = platControl.get('nom')?.value;
      this.nom.emit(nom);
    }

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('plats')!) || [];
    dataFromLocalStorage.splice(index, 1);
    localStorage.setItem('plats', JSON.stringify(dataFromLocalStorage));

    const prix = this.plats.at(index).get('prix')?.value;
    this.total -= prix;
    this.plats.removeAt(index);
  }

  selectedOption(event : any)
  {
    let value = event.target[event.target.selectedIndex].text

    if(value == this.actions[0]){
      this.button = this.actionButton[1]
      this.hideCostumer = false
    };

    if(value == this.actions[1]){
      this.button = this.actionButton[0];
      this.hideCostumer = true
    }
  }

  decreaseValue(i: number) {
    const plats = localStorage.getItem('plats')!;
    const prixInitial = JSON.parse(plats)[i].prix;
    // console.log(prixInitial);
    const quantiteControl = this.plats.at(i).get('quantite');
    if (quantiteControl?.value > 1) {
      quantiteControl?.setValue(quantiteControl.value - 1);
      const prix = this.plats.at(i).get('prix');
      prix?.setValue(prix.value - prixInitial);
      this.total -= prixInitial

    } else if (quantiteControl?.value == 1){
      this.total -= prixInitial
      this.plats.removeAt(i);
    }
  }

  increaseValue(i: number) {
    const plats = localStorage.getItem('plats')!;
    const prixInitial = JSON.parse(plats)[i].prix;
    // console.log(prixInitial);

    const quantiteControl = this.plats.at(i).get('quantite');
    quantiteControl?.setValue(quantiteControl.value + 1);
    const prix = this.plats.at(i).get('prix');
    prix?.setValue(prix.value + prixInitial);
    this.total += prixInitial
  }

  client()
  {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  


  
  // ------------ New Test ------------>
  
  // handleMenu(data : any, menuValue : number){
  //   console.log(data);
  //   this.getMenu = menuValue;
  //   this.gotData.push(data);
  //   this.gottenMenu = this.getMenuFormLocalStorage(this.gotData);
  //   let totalMenu = 0
  //   this.gottenMenu.forEach((menu: any) => {
  //     totalMenu+= menu.price
  //   });
  //   this.total = totalMenu
  //   console.log(this.gottenMenu);
  // }

  
  //   removeMenu(id: number, arrayTarget: any[]) {
  //     let newArray = arrayTarget.filter(item => item.id !== id);
  //     this.gottenMenu = this.getMenuFormLocalStorage(newArray); 
  // }
  

  // getMenuFormLocalStorage(gotData : any){
  //   localStorage.setItem('gottenMenu',JSON.stringify(gotData));
  //   return JSON.parse(localStorage.getItem('gottenMenu')!);
  // }

}
