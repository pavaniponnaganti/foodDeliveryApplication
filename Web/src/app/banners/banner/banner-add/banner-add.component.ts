import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../banner.service';
import { bannerDTO } from './bannermodel';

@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {

  bannermod : bannerDTO  = new bannerDTO();
  constructor(private bannerAddService :BannerService) { }

  ngOnInit() {
  }

  // bannerAddObj = {
  //   city:'Hyd',
  //   image:'Amal.png',
  //   position:'Least',
  //   status:'married',
  //   restaurant:'krithunga'
  // }

  save(){
    console.log(this.bannermod);
    this.bannerAddService.bannerAdd(this.bannermod, result =>{
      console.log(result);
    })
  }
  
}
