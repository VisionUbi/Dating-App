import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
usersFromHomeComponent = input.required<any>();
cancelRegister = output<boolean>();
model : any = {};
private AccountService = inject(AccountService);

register(){
  this.AccountService.register(this.model).subscribe({
    next : response => {
      console.log(response);
      this.cancel();
    },
    error : err => {
      console.log(err);
    },
    complete : () => {}
  })
}
cancel(){
  this.cancelRegister.emit(true);
}
}
