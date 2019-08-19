import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // HttpClient, HttpErrorResponse
import { Category } from '../category/category';
import { tap, catchError } from 'rxjs/operators'; // tap, catchError
import { Observable, throwError } from 'rxjs'; // throwError

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { } // kategorileri okumak için
  path = 'http://localhost:3000/categories'; // kategorileri okuyacağımız json dosyasını ayağa kaldırdığımızda aldığımız link

  getCategories(): Observable<Category[]> {
    return this.http
    .get<Category[]>(this.path).pipe( // kategorileri listeleyeceğimizi söyledik
      tap(data => console.log(JSON.stringify(data))), // pipe'ın tapı ile log alıyoruz
      catchError(this.handleError) // Hata olursa handleError methodumuzu çağırıp hatayı inceliyoruz
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) { // normal bir hata ise
      errorMessage = 'Bir Hata Oluştu' + err.error.message;
    } else { // sistemsel bir hata ise
      errorMessage = 'Sistemsel Bir hata';
    }
    return throwError(errorMessage); // hatayı throwError ile dönürüyoruz
  }
}
