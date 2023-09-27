import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public serv:CurewellservService,private router:Router) { }
username:string="";
ngOnInit(): void {
  this.loadUserData();
}

loadUserData() {
  this.serv.username = localStorage.getItem("username");
  this.serv.navvisible = localStorage.getItem("username") != null;
}

logout() {
  this.serv.logOut();
  
  this.loadUserData();
  this.router.navigate(['']);
}

// Example of calling loadUserData explicitly when needed
reloadUserData() {
  this.loadUserData();
}
}







