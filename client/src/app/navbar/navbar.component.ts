import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Changed `styleUrl` to `styleUrls`
})
export class NavbarComponent {
  model: any = {};
  loggedIn: boolean = false;

  constructor(@Inject(AccountService) private _accountService: AccountService) {} // Fixed Inject syntax

  login() {
    this._accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    });
  }
}
