import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { DishService } from '../dish.service';
import { CartService } from '../services/cart.service';

@Inject(DishService)

@Component({
  selector: 'app-famousdish-list',
  templateUrl: './famousdish-list.component.html',
  styleUrls: ['./famousdish-list.component.css']
})
export class FamousdishListComponent implements OnInit {
  

  famous!: IProduct[];

  searchKey:string="";

  public filterCategory : any;

  constructor(private dishService: DishService,private cartService: CartService) { }

  ngOnInit(): void {
    //this.dishService.getAlldish().subscribe(data => this.famous=data);
    this.dishService.getAlldish().subscribe((data: IProduct[]) => {
      console.log(data);
      this.famous = data;
      // for cart use------------------------

      this.famous.forEach((a: any) => {

        this.filterCategory = data;

        if(a.category === "Veg" || a.category === "Non-Veg"){

          a.category ="famousdish-list"

        }

        Object.assign(a, { quantity: 1, total: a.Price })

      });

      console.log(this.famous);

    });



    this.cartService.search.subscribe((val:any)=>{

      this.searchKey = val;

    })

   

  }

  addtocart(dt: any){
    this.cartService.addtocart(dt);
    //console.log(dt);
  }


filter(category:string){
      this.filterCategory = this.famous
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
    }



  



  
}
