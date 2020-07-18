import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/banners/banner.service';
import { manageCities } from './manage-citiesmodel';

@Component({
  selector: 'app-manage-cities-add',
  templateUrl: './manage-cities-add.component.html',
  styleUrls: ['./manage-cities-add.component.scss']
})
export class ManageCitiesAddComponent implements OnInit {
  managecitiesmod : manageCities  = new manageCities();

  constructor(private manageSevice:BannerService) { }

  ngOnInit() {
  }

  save(){
    console.log(this.managecitiesmod);
    this.manageSevice.manageCitiesAdd(this.managecitiesmod, result =>{
      console.log(result);
    })
  }
 
}
