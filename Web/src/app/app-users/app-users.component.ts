import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.scss']
})
export class AppUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('#example1').DataTable();
  }

}
