import { Component ,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  productList :any
  durationInSeconds = 1;
  public cartItems: any = [];
  searchKey:string="";
  filterCategory="";
  womensCloth:any
 constructor(private api:ApiService ,private Cartservice:CartService ){}

  ngOnInit(){
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      console.log(this.productList);
      // if(this.productList.category ==="women's clothing"){
     
        
      // }
      })
      // console.log(this.womensCloth);
    
    this.Cartservice.Search.subscribe((val:any)=>{
      this.searchKey=val
    })
    // this.filterCategory=res;
  }
  cartBtn(items:any){
    this.Cartservice.addtoCart(items)
    console.log(items);  
  }

  // filter(catogery:string){

  // }

 
}
