import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../shared/data-transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productList : any;
  constructor(private dataTransferService : DataTransferService) { }
  searchByName : string = '';
  ngOnInit(): void {
    this.addToCartProducts();
  }

  addToCartProducts() {
    this.dataTransferService.productList$.subscribe(res => {
      this.productList = res
      
    })
  }

  search(event:any){
    this.searchByName = (event.target as HTMLInputElement).value;
    console.log(this.searchByName);
    this.dataTransferService.searchProduct(this.searchByName)
  }

}
