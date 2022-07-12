export interface IOrder {
    orderid?:number;
    dishname:String;
    price:number;
    quantity:number;
   dishimage_url:string;
   total:number;
   grandtotal :number;
   famousdish:{
   food_id:number;
   }
}
