import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  foodList(callback: (data) => void){
    this.http.get(environment.apiurl + "foodList").subscribe(data=>{
      callback(data)
    })
  }
 
}
