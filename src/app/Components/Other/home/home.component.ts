import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv: CurewellservService) { }

  ngOnInit(): void {
  }

  isUserAuthenticated = (): boolean => {
    return this.serv.isUserAuthenticated();
  }

  logOut = () => {
    this.serv.logOut();
  }

}
