import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent implements OnInit {
  products: any;
  loading = false;

  @Output() loadingEvent = new EventEmitter();

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.setLoading();

    this._productsService.getData().subscribe((data) => {
      this.products = data;
      console.log(data);
      this.loading = false;
      this.setLoading();
    });
  }

  setLoading() {
    this.loadingEvent.emit(this.loading);
  }
}
