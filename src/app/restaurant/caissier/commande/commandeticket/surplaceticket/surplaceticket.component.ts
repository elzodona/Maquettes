import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-surplaceticket',
  templateUrl: './surplaceticket.component.html',
  styleUrls: ['./surplaceticket.component.css']
})
export class SurplaceticketComponent {

  @Input() ticketCommands : any; 
  orderItems : any;
  totalOrder : number = 0;

  

  ngOnChanges(){
    if(this.ticketCommands !== undefined){
      console.log(this.ticketCommands); 

      this.orderItems = this.ticketCommands
      this.totalOrder = 0;
      this.orderItems.commandes.forEach( (item : any) => {
         this.totalOrder += item.prix
      });
      // console.log(this.totalOrder);
      
    }
  }
}
