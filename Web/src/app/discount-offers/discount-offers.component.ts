import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount-offers',
  templateUrl: './discount-offers.component.html',
  styleUrls: ['./discount-offers.component.scss']
})
export class DiscountOffersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  addNewPageClick(){
    this.route.navigateByUrl('discount-offers-add');
  }
}
