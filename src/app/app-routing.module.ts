import { LoginComponent } from './login/login.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  {path: 'products', component : ProductComponent},
  // biri pathde productsı kullanırsa ProductComponent açılsın
  {path: '', redirectTo : 'products', pathMatch: 'full'},
  // products pathine yolluyoruz ve pathMatch full yapıp başka bişey aranırsada productsa yolluyoruz
  {path: 'products/category/:categoryId' , component : ProductComponent},
  // tıklanan kategorinin gelmesi için dinamik path veriyoruz
  {path: 'product-add-1', component : ProductAddForms1Component, canActivate: [LoginGuard]},
  // ürün ekleme / klasik
  {path: 'product-add-2', component : ProductAddForms2Component},
  // ürün ekleme / ractive
  {path: 'login', component : LoginComponent}
  // kullanıcı işlemleri
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
