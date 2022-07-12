import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { IProduct } from './IProduct';



@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient: HttpClient) { }

  getAlldish() : Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>("https://localhost:44367/api/famousdishes",
    {
      headers:{"Access-Control-Allow-Origin":" *",
     
     }
    });
  }

  // deletePost(food_id): Observable<IProduct[]>{
  //   return this.httpClient.delete<IProduct>(this.url+''+food_id);
  // }

  //post get put delete method
  // putdish(data:any,id:number){
  //   return this.httpClient.put<IProduct>("https://localhost:44367/api/famousdishes/"+id,data).pipe(
  //     map(
  //       (res =>{
  //         return res;

  //       }
  //         )
  //     )
  //   )
  // }


  deletedish(food_id:any):Observable<IProduct>{
    return this.httpClient.delete<IProduct>("https://localhost:44367/api/famousdishes/"
    +food_id)
    .pipe(
      map(
        (res:any) =>{
          return res;
        }
          )
      )
    }



  postdish(data:any){
    this.httpClient.post<IProduct[]>("https://localhost:44367/api/famousdishes",data,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      } 
}).subscribe(result=>console.log("Data send to Database"));
    
  }

//   addchecks(data:IProduct){
    
//     this.httpClient.post<IProduct[]>("https://localhost:44367/api/famousdishes",data,{
//       headers:{
//         "Access-Control-Allow-Origin":"*"
//       } 
// }).subscribe(result=>console.log("Data send to Database"));
//   }
 

  
}

