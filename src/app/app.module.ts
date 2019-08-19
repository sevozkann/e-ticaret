import { LoginGuard } from './login/login.guard'; // LoginGuard
import { AccountService } from './services/account.service'; // AccountService
import { AlertifyService } from './services/alertify.service'; // AlertifyService
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormsModule ,ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe'; // ProductFilterPipe
import { HttpClientModule } from '@angular/common/http';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component'; // HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  // ReactiveFormsModule
    FormsModule, // FormsModule
    HttpClientModule // HttpClientModule
  ],
  providers: [AlertifyService, AccountService, LoginGuard], // AlertifyService, AccountService
  bootstrap: [AppComponent]
})
export class AppModule { }
