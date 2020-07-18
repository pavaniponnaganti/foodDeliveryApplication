import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-welcomeslider',
  templateUrl: './welcomeslider.component.html',
  styleUrls: ['./welcomeslider.component.scss']
})
export class WelcomesliderComponent implements OnInit {
 
  welcomesliderList:any;
  constructor(public router:Router, private welcomesliderservice :BannerService) { }

  ngOnInit() {
      this.welcomeSlider();

  }
  addnewpageclick()
  { 
      this.router.navigateByUrl('welcomeslider-add');
  }

   welcomeSlider()
   {
      this.welcomesliderservice.welcomeSliderList(result =>{
        console.log(result);
        this.welcomesliderList = result.result;
      })
   }
}
 