import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelled-orders',
  templateUrl: './cancelled-orders.component.html',
  styleUrls: ['./cancelled-orders.component.scss']
})
export class CancelledOrdersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  addNewPageClick(){
    this.route.navigateByUrl('cancelled-order-add');
  }

}
