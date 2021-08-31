import { Component, OnDestroy, OnInit } from '@angular/core';
 import { DataTransferService } from '../../shared/data-transfer.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
cartSub : Subscription;
  productList : any;
  total = 0
  constructor(private dataTransferService : DataTransferService) { }

  ngOnInit(): void {
    this.addToCartProducts()
    
  }
addToCartProducts() {
  this.dataTransferService.productList$.subscribe(res => {
    this.productList = res
    this.getTotalPrice()
    
  })
}

getTotalPrice() {
  this.productList.forEach(element => {
    this.total = this.total + element.price;

  });

}

removeItem(item) {
this.productList.splice(item,1)
}
emptycart(){
  this.productList.splice(0, this.productList.length)
}

ngOnDestroy(){
  if(this.cartSub) this.cartSub.unsubscribe()
}
}
