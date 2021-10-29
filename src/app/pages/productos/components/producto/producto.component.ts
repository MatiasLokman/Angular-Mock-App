import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  @Input() productData: any;

  constructor(
    private _cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  addProductToCart() {
    this._cartService.addProductsToCart(this.productData);
    // console.log(this.productData);
    this._snackBar.open(`${this.productData.title} agregado con éxito!`, 'X', {
      duration: 2500,
      // horizontalPosition: 'right',
      // verticalPosition: 'top',
    });
  }
}
