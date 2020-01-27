import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser = this.rs.getCurrentUser();
  onSignOut() {
    this.rs.onSignOut();
  }
  constructor(private rs : RestService) {
   }

  ngOnInit() {
    //this.rs.checkLogin();
  }

}