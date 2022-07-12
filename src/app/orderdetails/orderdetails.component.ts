
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { IOrder } from '../iorder';
import { OrderService } from '../order.service';
import { DishService } from '../dish.service';
import { IProduct } from '../IProduct';

@Inject(OrderService)

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  order!: IOrder[];
  public famous: any[] = [];
  public totalItem: number = 0;
  public grandTotal!: number;

  dishname: any;
  price: any;
  dishimage_url: any;
  name: any;
  image_url: any;
  quantity: any;

  constructor(private api: ApiService, private cartService: CartService,
    private orderservice: OrderService, private dishservice: DishService) { }

  ngOnInit(): void {
    this.cartService.getdish()
      .subscribe(res => {
        this.famous = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })

    this.cartService.getdish()
      .subscribe(res => {
        this.totalItem = res.length;
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



    save(){
      let order:IOrder={
        //food_id:this.food_id.value,
        // name: this.name.value,
        // price: parseInt(this.price.value),
        // image_url: this.image_url.value,
        quantity: 0,
        dishname: '',
        price: 0,
        dishimage_url:'',
        total: 0,
        grandtotal:0,
        famousdish: {
          food_id: 0
        }
      };
      this.orderservice.addorder(order);
      console.log("data");
      alert("Data Saved");
      // this.dishService.getAlldish();
    }


  }

