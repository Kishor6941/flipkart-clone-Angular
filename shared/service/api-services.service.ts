import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor( private http : HttpClient) { }


getProducts() {
  let path = 'https://fakestoreapi.com/products';
  return this.http.get<any>(path)
}

}