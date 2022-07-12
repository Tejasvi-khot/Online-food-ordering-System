import { Injectable } from '@angular/core';
import { Icheckout } from './icheckout';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutserService {

  constructor(private http:HttpClient) { }

  addchecks(checkout:Icheckout){
    
    this.http.post<Icheckout[]>("https:/",checkout,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      } 
}).subscribe(result=>console.log("Data send to Database"));
  }
 
}
