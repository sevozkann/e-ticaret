import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';

@Injectable()


export class LoginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { } // AccountService ve Router'u gör
    // route: ActivatedRouteSnapshot gitmek istediği yer
    // state: RouterStateSnapshot bulunduğu yer
    // CanActivate aktive edebilir mi
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // tslint:disable-next-line: prefer-const
        let logged = this.accountService.isLoggedIn(); // giriş yapmışmı bak logged'a at
        if (logged) { // doğru giriş yapmışsa
            return true; // true döndürsün
        }
        this.router.navigate(['login']); // aktif değilse logine gitsin
        return false; // false döndür
    }
}
