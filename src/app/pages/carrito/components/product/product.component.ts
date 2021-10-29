import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: any;
  @Output() productRemovalEvent = new EventEmitter();

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  removeProduct() {
    this._cartService.removeProductFromCart(this.productData.id);
    this.productRemovalEvent.emit();
  }
}
