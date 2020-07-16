import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../banner.service';

@Component({
  selector: 'app-welcomeslider-addnew',
  templateUrl: './welcomeslider-addnew.component.html',
  styleUrls: ['./welcomeslider-addnew.component.scss']
})
export class WelcomesliderAddnewComponent implements OnInit {

  constructor(private welcomeAddSliderService: BannerService) { }

  ngOnInit() 
  {
  }
  save()
  {
    const sliderObj ={
      title	:'amal',
      imagepath: 'ar.pp.png',
      sortno:'696'  
    }
    this.welcomeAddSliderService.welcomeAdd(sliderObj, res => {
    console.log(res);
    });
  }

}
