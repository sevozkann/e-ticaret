import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService] // CategoryService görebilmek için providers'a ekliyoruz
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService) { }
  title = 'Kategori Listesi';
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => { // categoy servis içinde getProducts methodumuzu çağırıp subscribe ediyoruz
      this.categories = data; // datayı categories yolluyoruz
    });
  }

}
