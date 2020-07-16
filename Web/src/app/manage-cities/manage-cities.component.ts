import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cities',
  templateUrl: './manage-cities.component.html',
  styleUrls: ['./manage-cities.component.scss']
})
export class ManageCitiesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    
  }
  addnewpageclick(){
    this.route.navigateByUrl('manage-cities-add');
  }

  
}
