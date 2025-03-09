import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],  
})
export class NavbarComponent {
  model: any = {}; 
  accountService = inject(AccountService);

  constructor(@Inject(AccountService) private _accountService: AccountService) {} // Fixed Inject syntax

  login() {
    this._accountService.login(this.model).subscribe
    (
      {
      next: response => {
        console.log('Logged in successfully',response);
      },
      error: (error) => {
        console.log(error);
    }})
  }
  logout() {
    this.accountService.logout();
  }
}
 