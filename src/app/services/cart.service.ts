import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: any[] = [];

  constructor() {}

  addProductsToCart(product: any) {
    this.cartProducts = [...this.cartProducts, product];
    console.log(this.cartProducts);
  }

  getCartProducts() {
    return this.cartProducts;
  }

  removeProductFromCart(id: number) {
    this.cartProducts = this.cartProducts.filter(
      (product) => product.id !== id
    );
    console.log(this.cartProducts);
  }
}
