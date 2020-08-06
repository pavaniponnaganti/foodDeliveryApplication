import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../banner.service';
import { bannerDTO } from './bannermodel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {
  editdata: any;
  bannermod : bannerDTO  = new bannerDTO();
  updateEnable= false;
  constructor(private bannerAddService :BannerService, public route: ActivatedRoute) { 
    this.route.params.subscribe(res=> {
      console.log('Redirectd Data', res);
      this.editdata =res;
      //this.updateEnable =true;
    })
    //console.log(this.editdata);
    this.bannermod.city = this.editdata.city;
    this.bannermod.position = this.editdata.position;
    this.bannermod.status = this.editdata.status;
  }

  ngOnInit() {
    //this.bannermod = this.editdata;
  }

  // bannerAddObj = {
  //   city:'Hyd',
  //   image:'Amal.png',
  //   position:'Least',
  //   status:'married',
  //   restaurant:'krithunga'
  // }

  save(banner :any){
    console.log(banner);
    console.log(this.bannermod);
    this.bannerAddService.bannerAdd(this.bannermod, result =>{
      console.log(result);
    })
  }
   
}
