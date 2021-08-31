import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiServicesService } from '../../shared/service/api-services.service';
import { DataTransferService } from '../../shared/data-transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
productList : any;
searchKey = ''
cartItemList = []
searchByName = '';
addToCartSub : Subscription;
searchProdutSub : Subscription;
  constructor(private apiServicesService : ApiServicesService, private dataTransferService : DataTransferService) { }

  ngOnInit(): void {
    this.getProducts();
    this.searchProduct()
  }
getProducts() {
  this.addToCartSub = this.apiServicesService.getProducts().subscribe(res => {
    this.productList = res;
  })
}
addtocart(product) {
  this.cartItemList.push(product)
this.dataTransferService.sendProductList(this.cartItemList);
}

searchProduct() {
 this.searchProdutSub = this.dataTransferService.search$.subscribe(res => {
    this.searchKey = res    
  })
}
ngOnDestroy() {
  if(this.addToCartSub) this.addToCartSub.unsubscribe();
  if(this.searchProdutSub) this.searchProdutSub.unsubscribe();
}

}
