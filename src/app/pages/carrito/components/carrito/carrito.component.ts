import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  products: any;

  constructor(private _cartService: CartService, private titleService: Title) {}

  ngOnInit(): void {
    this.getProducts();
    this.titleService.setTitle('LOK | Carrito');
  }

  getProducts() {
    this.products = this._cartService.getCartProducts();
  }
}
