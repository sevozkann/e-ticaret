import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; // HttpClient, HttpErrorResponse
import { Product } from '../product/product';
import { tap, catchError } from 'rxjs/operators'; // tap, catchError
import { Observable, throwError } from 'rxjs'; // throwError

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { } // ürünleri okumak için
  path = 'http://localhost:3000/products';
  // ürünleri okuyacağımız json dosyasını ayağa kaldırdığımızda aldığımız link

  getProducts(categoryId): Observable<Product[]> {// kategoriyi listelemek için getProducts içinde categoryId'yi de istiyoruz
    let newPath = this.path;
    // this.path ürünleri listeleyeceğimizi söyledik
    // newPath oluşturduk sebebi eğer kategori gelmezse tüm ürünleri listelemek istememiz
    // ve ürünlerin path'ini newPathe attık
    if (categoryId) { // eğer kategori seçilmişse
      newPath += '?categoryId=' + categoryId;
      // + ' ?categoryId= ' + categoryId  ile gelen categoryId yi newPath attık
    }
    return this.http.get<Product[]>(newPath).pipe( // gelen ürünleri listelettik
      tap(data => console.log(JSON.stringify(data))), // pipe'ın tapı ile log alıyoruz böylece ürünleri json formatında consolda da görürüz
      catchError(this.handleError) // Hata olursa handleError methodumuzu çağırıp hatayı inceliyoruz
    );
  }

  addProduct(product: Product): Observable<Product> { // product yolluyoruz tek olduğu için observable bir product yolluyoruz
    const httpOptions = { // otorizasyon yollamak için oluşturduk
      headers: new HttpHeaders({ // yeni bir httpHeader yolluyoruz
        'Content-Type': 'application/json', // json tipinde veri gönderiyorum ve o formatta istiyorum
        'Authorization': 'Token'
      })
    };
    return this.http.post<Product>(this.path, product, httpOptions).pipe( // http posta bu pathteki productı yolla
      tap(data => console.log(JSON.stringify(data))), // pipe'ın tapı ile log alıyoruz böylece ürünleri json formatında consolda da görürüz
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
