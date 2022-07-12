import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IOrder } from './iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient :HttpClient) { }
addorder(order:any){
  this.httpclient.post<IOrder>("https://localhost:44367/api/orders",order,{
    headers:{"Access-Control-Allow-Origin":" *"

    }
  });
}
getAllorder()
{
  this.httpclient.get("https://localhost:44367/api/orders",{
    headers:{"Access-Control-Allow-Origin":" *"
    }
  });
}

}
