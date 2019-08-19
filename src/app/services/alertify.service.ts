import { Injectable } from '@angular/core';
declare let alertify: any; // alertify

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) { // gelen mesaj
    alertify.message(message); // mesajda kullanmak istediğimiz jsye gelen mesajı atıyoruz
  }
}
