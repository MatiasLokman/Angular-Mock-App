import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
