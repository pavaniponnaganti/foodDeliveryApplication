import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-running-orders',
  templateUrl: './running-orders.component.html',
  styleUrls: ['./running-orders.component.scss']
})
export class RunningOrdersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  addNewPageClick(){
    this.route.navigateByUrl('running-order-add');
  }
}
