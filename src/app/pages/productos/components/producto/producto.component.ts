import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  @Input() productData: any;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  addProductToCart() {
    this._cartService.addProductsToCart(this.productData);
    // console.log(this.productData);
  }
}
