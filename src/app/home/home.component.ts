import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];

public searchTerm:string='';


  
   constructor(private fs:FoodService,private route:ActivatedRoute,private cartService:CartService) { }

   ngOnInit(): void {
 this.route.params.subscribe(params =>{
   if(params['searchItem'])
   this.foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
   else if(params['tag'])
   this.foods=this.fs.getAllFoodByTag(params['tag'])
   else
   this.foods = this.fs.getAll();
 })
}


 search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
    console.log(this.searchTerm);
  }



   }


  


