import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.scss']
})
export class StaffMembersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    $(document).ready(function() {
      $('#example').DataTable();
  } );
  }


  addNewPageClick(){
    this.route.navigateByUrl('staff-mem-add');
  }
}
