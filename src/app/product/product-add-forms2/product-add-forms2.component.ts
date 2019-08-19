import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from './../../services/category.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddForms2Component implements OnInit {

  // formla ilgiligi validasyon yapacağımız yer formBuilder
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }

  productAddForm: FormGroup; // FormGroup şeklinde productAddForm oluşturduk
  product: Product = new Product();
  categories: Category[];
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({ // productAddForma alacağımız değerleri grup halinde yolladık
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => { // categoy servis içinde getProducts methodumuzu çağırıp subscribe ediyoruz
      this.categories = data; // datayı categories yolluyoruz
    });
  }

  add() {
    if (this.productAddForm.valid) { // eğer productformum geçerliyse
      this.product = Object.assign({}, this.productAddForm.value); // formun değerini producta atadık
    }
    // tslint:disable-next-line: max-line-length
    this.productService.addProduct(this.product).subscribe(data => { // product servisinde addProduct fonksiyonunu çağır modeldeki ürünü içine ata
      this.alertifyService.success(data.name + ' başarıyla eklendi');
    });
  }
}
