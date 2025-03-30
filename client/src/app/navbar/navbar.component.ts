import { TitleCasePipe } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive,TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],  
})
export class NavbarComponent {
  model: any = {}; 
  accountService = inject(AccountService);
  private toaster = inject(ToastrService);
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
        this.toaster.error(error.error);
    }})
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
 