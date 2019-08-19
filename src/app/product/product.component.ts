import { ProductService } from './../services/product.service'; // ProductService
import { AlertifyService } from './../services/alertify.service'; // AlertifyService
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]  // productServislerimizi görebilmek için providers'a ekliyoruz
})
export class ProductComponent implements OnInit {
  title = 'Ürün Listesi';
  filterText = ''; // filterTextin geleceği yer
  products: Product[];
  constructor(
    private alertifyService: AlertifyService,
    // AlertifyService 'i görmek için
    private productService: ProductService,
    // ProductService 'i görmek için
    private activatedRoute: ActivatedRoute
    // aktif linke gitmek için
    ) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.productService.getProducts(params['categoryId']).subscribe(data => {
        // kategorilerin listelenmesi için getProducts'a categoryId'yi de yolluyoruz
        // product servis içinde getProducts methodumuzu çağırıp subscribe ediyoruz
        // Buradaki activatedRoute parametrelerine subscribe ol
        this.products = data; // datayı productsa yolluyoruz
      });
    });
  }
  addToCart(product) {
    this.alertifyService.success(product.name + ' Sepete Eklendi');
    // ürünün sepete ekle butonuna basıldığı zaman alertifyService deki succes methodumuza mesajı gönderiyoruz
  }

}
