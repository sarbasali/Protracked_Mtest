import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: any = [];
  timeout: any
 public productlist: any = new BehaviorSubject<any>([]);
  TotalAmt: any;
  CartCount: number = 0;
 public Search : any = new BehaviorSubject<string>("");

  
  constructor() {}
  getProduct() {
    return this.productlist.asObservable();
  }

  addtoCart(product: any) {
    
    product.quantity=1
    product.cartprice=product.price

    const isProductInCart = this.cartItems.some((item: any) => item.id === product.id);

    if (!isProductInCart) {
        this.cartItems.push(product);
    } else {
        console.log('Product already added');
    }
    this.productlist.next(this.cartItems);
    this.CartCount = this.cartItems.length;
    this.getTotalAmt()
   
    
  }
  //  alertFunc() {
  //   alert("add cart successful")
  // }

  getTotalAmt() {
    let grantTotal = 0;
    this.cartItems.map((a: any) => {
      grantTotal += a.total;
      console.log(grantTotal);
      
    });
    return grantTotal
  }

  removeCart(product: any) {
    this.cartItems.map((a: any, index: any) => {
      if (product._id === a._id) {
        this.cartItems.splice(index, 1);
      }
    });
  }
  removecart() {
    this.cartItems = [];
    this.productlist.next(this.cartItems);
  }
}


