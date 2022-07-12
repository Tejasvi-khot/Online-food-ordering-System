import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { DishService } from '../dish.service';
import { IProduct } from '../IProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-dishpage',
  templateUrl: './dishpage.component.html',
  styleUrls: ['./dishpage.component.css']
})
export class DishpageComponent implements OnInit {
  formValue !: FormGroup;

  famous!: IProduct[];
// actionBtn:string="save";
  name:FormControl=new FormControl("");
  price:FormControl=new FormControl("");
  image_url:FormControl=new FormControl("");
  food_id: number | undefined | null | string;
  //food_id !:IProduct[];
 
  
 

 
  constructor(private dishService: DishService,private cartService: CartService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.dishService.getAlldish().subscribe((data: IProduct[]) => {
      console.log(data);
      this.famous = data;
      // for cart use------------------------

      this.famous.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
    });


   
   
}


save(){
  let famous:IProduct={
    //food_id:this.food_id.value,
    name: this.name.value,
    price:parseInt(this.price.value) ,
    image_url: this.image_url.value

  };
  this.dishService.postdish(famous);
  alert("Data Saved");
  // this.dishService.getAlldish();
}
  
// delete(dt:any){
// this.dishService.deletedish(dt.id).subscribe(res=>{
//   alert("dish records deleted");
//   this.dishService.getAlldish();
// })
// }
// delete(dt:any):void{
//   this.dishService.deletedish(food_id).subscribe() => {
//     console.log(successResponse);
//   console.log("delete");
//   })




deleteproduct(food_id:number)
{
this.dishService.deletedish(this.food_id)
.subscribe
({next: (res)=>{alert("Product deleted successfully");}
,error:()=>{
   alert("error while deleting the product");
} 
})
}
  }

// function food_id(food_id: any) {
//   throw new Error('Function not implemented.');
// }
// addtocart(dt: any){
//     this.cartService.addtocart(dt);
//     //console.log(dt);
//   }

  // removeItem(dt:any){
  //   this.cartService.removecartItem(dt);
  //     }

// }
// function successResponse(successResponse: any) {
//   throw new Error('Function not implemented.');
// }

// function food_id(food_id: any) {
//   throw new Error('Function not implemented.');
// }

