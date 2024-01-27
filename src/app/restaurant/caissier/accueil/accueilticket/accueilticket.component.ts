import { Component } from '@angular/core';

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
  
  ngOnInit(){
    this.button = this.actionButton[0];
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
}
