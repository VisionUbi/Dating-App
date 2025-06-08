import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/member';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
private http = inject(HttpClient);
private accountService = inject(AccountService);
baseUrl = environment.apiUrl;
  constructor() { }

  getMembers(){
    this.http.get<Member[]>(this.baseUrl + 'users').subscribe({
    })
  }

  getMember(username: string){
    this.http.get<Member>(this.baseUrl + 'users/' + username).subscribe({
    })
  }

  getHttpOptions(){
    return{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accountService.currentUser()?.token}` 
      })
    }
  }


}
