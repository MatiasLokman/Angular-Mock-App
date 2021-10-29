import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent implements OnInit {
  products: any;

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getData().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
}
