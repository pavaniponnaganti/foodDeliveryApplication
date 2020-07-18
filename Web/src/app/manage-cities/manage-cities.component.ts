import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from '../banners/banner.service';

@Component({
  selector: 'app-manage-cities',
  templateUrl: './manage-cities.component.html',
  styleUrls: ['./manage-cities.component.scss']
})
export class ManageCitiesComponent implements OnInit {
  mgCitiesList: any;
  constructor(private route: Router,private manageCitieService:BannerService) {

   }

  ngOnInit() {
    this.manageCities();
  }
  addnewpageclick(){
    this.route.navigateByUrl('manage-cities-add');
  }
  manageCities()
  {
    this.manageCitieService.manageCities(result =>{
      console.log(result);
      this.mgCitiesList = result.data;
    })
  }
  
  deleteRecord(namee : any)
  {
      const userName ={
        name : namee
      }
      this.manageCitieService.manageCitiesDelete(userName, ress =>{
        console.log(ress);
        this.mgCitiesList = ress.resss;
      })
  }
}
