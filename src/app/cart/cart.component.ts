import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
// import { Foods } from '../shared/models/food';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public famous:any[]=[];

public grandTotal!: number;
public totalItem:number=0;
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
  removeItem(dt:any){
this.cartService.removecartItem(dt);
  }

  emptycart(){
    this.cartService.removeAllcart();
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
