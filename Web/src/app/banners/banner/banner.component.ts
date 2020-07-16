import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerDetail : any;

  constructor(private bannerService : BannerService,private route: Router) { }

  ngOnInit()
   {
    this.bannerList();

  }
  addnewpageclick()
  {
    this.route.navigateByUrl('banner-add');
  } 

  bannerList()
  {    
    this.bannerService.bannerList(result =>{
      console.log(result);
      this.bannerDetail = result.data;
    })  
  }

  deleteRecord(city : any)
  {
    const cityName = {
      city: city
    }
    this.bannerService.bannerDelete(cityName, data =>{
      console.log(data);
      this.bannerList();
    })
    alert(city);
  }

}
