import { AccountService } from '../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User(); // gelen kullanıcı
  constructor(private accountService: AccountService) { } // AccountService gördük

  ngOnInit() {
  }

  login(form: NgForm) { // fonksiyona form gelecek
    this.accountService.login(this.model); // accountService deki logine buraya gelen kullanıcıyı yolla
  }

}
