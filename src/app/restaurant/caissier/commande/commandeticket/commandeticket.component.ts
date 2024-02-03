import { Component, Input, ViewChild } from '@angular/core';
import { SurplaceticketComponent } from './surplaceticket/surplaceticket.component';

@Component({
  selector: 'app-commandeticket',
  // template: `<p>{{ changeComTicket }}</p>`,
  templateUrl: './commandeticket.component.html',
  styleUrls: ['./commandeticket.component.css']
})
export class CommandeticketComponent {
   @Input() navs! : string;
   @Input() getTicket : any;
   @Input() deliveTicket : any
   @ViewChild(SurplaceticketComponent) surplaceticketcomp! : SurplaceticketComponent
   public  changeComTicket!: string;

   

  
    ngOnInit() {
      // console.log(this.navs)
    }
    

    ngOnChanges(){
      if(this.getTicket !== undefined){
        this.deliveTicket = this.getTicket
      }
    }

 
  
  
}
