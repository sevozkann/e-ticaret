import { AccountService } from './services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(private accountService: AccountService) { } // accountService çağırdık

  isLoggedin() {
    return this.accountService.isLoggedIn(); // giriş yapsın
  }

  logOut(){
    this.accountService.logOut(); // çıkış yapsın
  }
}
