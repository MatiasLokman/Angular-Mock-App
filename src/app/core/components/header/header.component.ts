import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartLenght = 0;
  statusMenu: boolean = false;


  links = [
    {
      path: 'inicio',
      desc: 'HOME',
      isIcon: false,
    },
    {
      path: 'productos',
      desc: 'PRODUCTOS',
      isIcon: false,
    },
    {
      path: 'atencion-al-cliente',
      desc: 'CONTACTO',
      isIcon: false,
    },
    {
      path: 'carrito',
      desc: 'shopping_cart',
      isIcon: true,
    },
  ];

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  // getCartLenght() {
  //   this._cartService
  //     .getCartLenght()
  //     .subscribe((data) => (this.cartLenght = data));
  // }

  getCartLenght = () => {
    this._cartService
      .getCartLenght()
      .subscribe((data) => (this.cartLenght = data));
  };




  BurgerMenu(status: boolean){
    this.statusMenu = status;
  }
}
