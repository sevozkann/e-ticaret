import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService] // Kategori, Product Servislerini çağırıyoruz
})
export class ProductAddForms1Component implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }
    // Kategori Servisini çağırıyoruz
     // Product servisi çağırıyoruz
  model: Product = new Product(); // yeni model oluşturuyoruz
  categories: Category[]; // kategoriyi listelemek için

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => { // categoy servis içinde getProducts methodumuzu çağırıp subscribe ediyoruz
      this.categories = data; // datayı categories yolluyoruz
    });
  }

  add(form: NgForm) { // metoduna NgForm tipinde form yolladık
    // tslint:disable-next-line: max-line-length
    this.productService.addProduct(this.model).subscribe(data => { // product servisinde addProduct fonksiyonunu çağır modeldeki ürünü içine ata
      this.alertifyService.success(data.name + ' başarıyla eklendi');
    });
  }

}
