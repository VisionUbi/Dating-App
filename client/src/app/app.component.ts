import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  http = inject(HttpClient);
  users:any;


  ngOnInit(): void {
    const token  = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJqb2huIiwibmJmIjoxNzMyMDE0NTAxLCJleHAiOjE3MzI2MTkzMDEsImlhdCI6MTczMjAxNDUwMX0.K4nrXOpnHOPVqRS8QPrRqjMMMrBVqOE51yKSVBztJjln6QEBvXMVeh9Sq03MSICsxVYN1ZQgOV3CWiW4AOSmHQ';
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })

    this.http.get('https://localhost:44386/api/users', { headers }).subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete: () => {}
    });
  }
}
