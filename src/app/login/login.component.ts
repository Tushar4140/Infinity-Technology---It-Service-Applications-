import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  // arry to store user data
signupUsers: any[] = [];
// object which will bind to the form singUp
signupObj: any = {
  name: '',
  email: '',
  password: ''
};

// object for login 
loginObj: any = {
  email: '',
  password: ''
};



  
}



