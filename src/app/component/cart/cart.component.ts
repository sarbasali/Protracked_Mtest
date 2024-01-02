// import { Component ,OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';
// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent {
//   products:any =[]
//   samlpletotal=0
  
//   grandTotal=0
//   tottalItem: any;

//   constructor(private cartService:CartService){}
//   ngOnInit(){
//     this.products=this.cartService.cartItems 
//     // this.products.cartprice = this.products.price
//     // console.log(this.products.cartprice);
       
//     // this.grandTotal = this.products.cartprice
//   }
//   removecart(i:any){
//     this.cartService.removeCart(i)
//   }
//   getTotalAmt(){
//   //  this.cartService.getTotalAmt()
//   }
//   lessQnt(q:any){
//     if (q.quantity > 1) {
//       q.quantity -= 1;
//       q.cartprice -= parseInt(q.price);
//       this.grandTotal -= this.grandTotal-q.cartprice
//     }
//   }
//   addQnt(q:any){
//     q.quantity += 1
//     q.cartprice = q.quantity*  parseInt(q.price)
//     for (let i = 0; i < this.cartService.cartItems.length; i++) {
//       this.grandTotal += this.cartService.cartItems[i].cartprice;
//   }
    
//   }
//   ngDoCheck(): void {
//     this.tottalItem = this.cartService.CartCount
//   }
  

 
// }
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any = [];
  totalPrice = 0;
  tottalItem: any;
  shipping=20
  GrandTotal=0
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.cartItems;
    this.totalAmount();
    this.tottalItem = this.cartService.CartCount;
    this.grandTotal()
  }

  removecart(i: any) {
    this.cartService.removeCart(i);
    this.totalAmount();
  }

  getTotalAmt() {
    // this.cartService.getTotalAmt()
  }

  lessQnt(q: any) {
    if (q.quantity > 1) {
      q.quantity -= 1;
      q.cartprice -=  parseInt(q.price)
      this.updateTotalAmount(-q.price);
    }
  }

  addQnt(q: any) {
    q.quantity += 1;
    q.cartprice = q.quantity * parseInt(q.price)
    this.updateTotalAmount(q.price);
  }

  updateTotalAmount(priceChange: number) {
    this.totalPrice += priceChange;
    this.grandTotal(); 
  }

  totalAmount() {
    this.totalPrice = parseInt(this.products.reduce((total: number, product: any) => {
      return total + product.cartprice;
    }, 0));
  }
  grandTotal(){
    if (this.products.length >=1){
      this.GrandTotal=this.totalPrice+this.shipping
    }
    else{
      this.GrandTotal=0
      this.shipping=0
    }
    
  }
  

  
}
