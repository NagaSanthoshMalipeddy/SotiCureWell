import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from '../../../_interfaces/authenticated-response.model';
import { LoginModel } from '../../../_interfaces/login.model';
import { NgForm } from '@angular/forms';
import { CurewellservService } from 'src/app/curewellserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  credentials: LoginModel = {username:'', password:''};

  constructor(private router: Router, private http: HttpClient,public serv:CurewellservService) { }

  ngOnInit(): void {
    
  }

  login = ( form: NgForm) => {
    if (form.valid) {
      alert(this.credentials.username+"  "+this.credentials.password);
      this.http.post<AuthenticatedResponse>("http://localhost:5001/api/auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false;
          localStorage.setItem("username",this.credentials.username);
          this.router.navigate(["viewDoc"]);
        },
        error: (err: HttpErrorResponse) =>{ this.invalidLogin = true;}
      })
    }
  }
}
