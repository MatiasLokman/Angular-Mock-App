import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor() {}

  loading = false;

  ngOnInit(): void {}

  setLoading(loadingState: boolean) {
    this.loading = loadingState;
  }
}
