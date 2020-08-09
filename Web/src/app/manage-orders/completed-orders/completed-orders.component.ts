import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.scss']
})
export class CompletedOrdersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  addNewPageClick(){
    this.route.navigateByUrl('completed-orders-add');
  }
}
