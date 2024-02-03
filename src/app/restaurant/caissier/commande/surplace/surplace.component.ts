import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-surplace',
  
  templateUrl: './surplace.component.html',
  styleUrls: ['./surplace.component.css']
})
export class SurplaceComponent {

  @Output() orderTicket = new EventEmitter;
  copyOrder : any;

 orders = [
    {
        numTable : 'Table 01',
        commandes : [
          {
              nomProduit : 'maffé',
              qte : 1,
              prix : 1000
          },
          {
            nomProduit : 'Jus Local',
            qte : 1,
            prix : 500
        }
        ]
    },

    {
        numTable : 'Table 02',
        commandes : [
          {
              nomProduit : 'yassa',
              qte : 1,
              prix : 2000
          },
          {
            nomProduit : 'Boisson',
            qte : 2,
            prix : 2000
        }
        ]
    },

    {
      numTable : 'Table 03',
      commandes : [
        {
            nomProduit : 'yassa',
            qte : 1,
            prix : 2000
        }
      ]
  }
  ]

  foodOrder(data: any){
    this.orderTicket.emit(data);
    
    // if(data.selected == true){
    //   data.selected = false ;
    //   this.orderTicket.emit(data);
    // }else{
    //   data.selected = true
    //   this.copyOrder = this.orders.filter(order =>{
    //     order.numTable != data.numTable
    //   })
    //   this.copyOrder.forEach((cpo : any) => {
    //     cpo.selected = false
    //   })
    //   this.orderTicket.emit(data);
    // }

    // console.log(data);

  }

  
}
