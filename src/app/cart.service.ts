import { Injectable } from '@angular/core';
import { IProduct } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] = [];

  getCartItems(){
    return this.cartItems;
  }

  addToCart(product: IProduct){
    this.cartItems.push(product)
  }

  emptyCart(){
    return this.cartItems = [];
  }

  // *** CONTINUE ***
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
