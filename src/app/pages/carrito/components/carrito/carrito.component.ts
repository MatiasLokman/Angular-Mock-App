import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  products: any;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this._cartService.getCartProducts();
  }
}
