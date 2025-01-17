import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }
  welcomeSliderList(callback: (datalist) => void  )
  {
      this.http.get(environment.apiurl +"welcomeslider").subscribe(datalist =>{
        callback(datalist)
      })
  }
bannerList(callback: (banlist) => void){
  this.http.get(environment.apiurl +"bannerlist").subscribe(banlist =>{
    callback(banlist)
  })
}

welcomeAdd(welcomeObj : any, callback: (welcomeAdd) => void){
  this.http.post(environment.apiurl +"welcomeAdd",welcomeObj).subscribe(welcomeAdd =>{
    callback(welcomeAdd);
  })
}

bannerAdd(bannerObj : any, callback : (bannerAdd) => void){
  this.http.post(environment.apiurl + "bannerAdd",bannerObj).subscribe(bannerAdd => {
      callback(bannerAdd);
  })
}

bannerDelete(bannerDelObj:any, callback:(bannerDel) => void){
  this.http.post(environment.apiurl +"bannerDelete", bannerDelObj).subscribe(res =>{
    callback(res);
  })
}

manageCities(callback: (managecitieslist) => void)
{
  this.http.get(environment.apiurl +"manage-cities").subscribe(managecitieslist =>{
    callback(managecitieslist);
  })
}

manageCitiesAdd(manageCitiesObj: any, callback:(manageCitiesAdd) => void){
      this.http.post(environment.apiurl+ "manage-cities-add", manageCitiesObj).subscribe(managecitiesadd =>{
        callback(managecitiesadd);
      })
}

manageCitiesDelete(manageCitiesDelObj: any, callback:(manageCitiesDel) => void) {
  this.http.post(environment.apiurl +"manage-cities-delete", manageCitiesDelObj).subscribe(managecitiesdel =>{
    callback(managecitiesdel);
  })
}

}


