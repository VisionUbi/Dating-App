import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],  
})
export class NavbarComponent {
  model: any = {}; 
  accountService = inject(AccountService);
  router = inject(Router);

  constructor(@Inject(AccountService) private _accountService: AccountService) {} // Fixed Inject syntax

  login() {
    this._accountService.login(this.model).subscribe
    (
      {
      next: response => {
        this.router.navigateByUrl('/members');
        console.log('Logged in successfully',response);
      },
      error: (error) => {
        console.log(error);
    }})
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
 