import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client'; 
  accountService = inject(AccountService); 
  ngOnInit(): void { 
  this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = (localStorage.getItem('user'));
    if (!userString){return;}
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

}
