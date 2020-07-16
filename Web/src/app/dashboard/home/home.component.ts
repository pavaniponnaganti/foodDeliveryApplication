import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodData:any;
  constructor(public dashboardservice:DashboardService) { }

  ngOnInit() {
    this.foodList();
  }
  foodList(){
    this.dashboardservice.foodList(result =>{
      console.log(result);
      this.foodData = result.result; 
    })
  }
}
 