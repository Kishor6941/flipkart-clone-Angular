import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; "rxjs"
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  public productList$ = this.productList.asObservable();
  public search$ = this.search.asObservable();


  sendProductList(data: any) {
    this.productList.next(data);
}
searchProduct(data: any) {
  this.productList.next(data);
}

}
