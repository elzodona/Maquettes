import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-accueilticket',
  templateUrl: './accueilticket.component.html',
  styleUrls: ['./accueilticket.component.css']
})
export class AccueilticketComponent {

  actions : string[] = ['A livrer','A emporter'];
  actionButton : string[] = ['Payer','Enregistrer'];
  button! : string
  hideCostumer : boolean = true
  commandeForm!: FormGroup;
  selectedAction: string = 'A emporter';
  total: number = 0;



  constructor(private fb: FormBuilder)
  {
    this.commandeForm = this.fb.group({
      plats: this.fb.array([
      ])
    });
  }

  ngOnInit(){
    this.button = this.actionButton[0];

    this.ajouterPlat('Chocolat', 1000);
    this.ajouterPlat('Pizza', 1000);
    this.ajouterPlat('Salade', 800);
    this.ajouterPlat('Pizza', 1000);
    // console.log(this.plats.value);
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
    this.total+=prix

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('plats')!) || [];
    const updatedData = [...dataFromLocalStorage, platFormGroup.value];
    localStorage.setItem('plats', JSON.stringify(updatedData));
  }

  supprimerPlat(index: number)
  {
    // console.log(index);
    const prix = this.plats.at(index).get('prix')?.value;
    // console.log(prix);
    this.total-=prix
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



}
