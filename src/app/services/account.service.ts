import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;
  login(user: User): boolean { // kullanıcıyı alsın ve boolean değer döndürsün
    // tslint:disable-next-line: triple-equals
    if  (user.userName == 'admin' && user.password == '12345') { // username adminse ve şifre 12345 ise
      this.loggedIn = true; // loggedIn true yap
      localStorage.setItem('isLogged', user.userName); // localStorage'a isLogged özelliği verdik değerine username dedik
      return true; // true döndür
    }
    return false; // değilse false  döndür
  }

  isLoggedIn() { // giriş yapıldığında
    return this.loggedIn;  // giriş yapan kullanıcıyı gör ver döndür
  }
  logOut() { // çıkış yapıldığında
    localStorage.removeItem('isLogged'); // lokaldeki girişi sil
    this.loggedIn = false; // false döndür
  }

}
