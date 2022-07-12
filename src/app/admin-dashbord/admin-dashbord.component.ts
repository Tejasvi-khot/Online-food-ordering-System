import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {

  public famous:any[]=[];
  public totalItem :number=0;
  public grandTotal!: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getdish()
    .subscribe(res=>{
      this.famous = res;
      this.grandTotal = this.cartService. getTotalPrice();
    })

this.cartService.getdish()
.subscribe(res=>{
  this.totalItem=res.length;
})
  }

  calculatePrice(){
    this.grandTotal=this.cartService.getTotalPrice();
     }
    
      public calcGrandTotal():number
      {
    let total:number = 0;
    for(let famous of this.famous){
      total +=(famous.quantity*famous.price);
    }
    return total;
      }
    
      inc(famous:any){
        if(famous.quantity!=5){
          famous.quantity+=1;
        }
      }
    
      dec(famous:any){
        if(famous.quantity!=1){
          famous.quantity-=1;
        }
      }

}