import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false; 
  isSmallScreen = false; 

  productList :any
  durationInSeconds = 1;
  public cartItems: any = [];
  // Cartservice: any;
  tottalItem:number=0
  searchTerm:string=''
  
 constructor(private api:ApiService ,private Cartservice:CartService ){}

  ngOnInit(){
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      console.log(this.productList);

      this.checkScreenSize();
      window.addEventListener('resize', () => {
        this.checkScreenSize();
      });
      
      })
    
  }
  ngDoCheck(): void {
    this.tottalItem = this.Cartservice.CartCount
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled'); // Add a log to check if this function is being called
  }
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Adjust the screen size as needed
    this.isMenuOpen = !this.isSmallScreen; // Close menu on medium/large screens
  }

  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.Cartservice.Search.next(this.searchTerm);
    
  }
  
}
