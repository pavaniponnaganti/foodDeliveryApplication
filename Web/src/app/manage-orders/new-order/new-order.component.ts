import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    $('#example2').DataTable();
  }

  addNewPageClick(){
    this.route.navigateByUrl('new-order-add');
  }

}
