import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  title = 'changeBrowserTitle';
  constructor(private titleService: Title) {}

  loading = true;

  ngOnInit(): void {
    this.titleService.setTitle('LOK | Productos');
  }

  setLoading(loadingState: boolean) {
    this.loading = loadingState;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Holaaaaaa');
  }
}
