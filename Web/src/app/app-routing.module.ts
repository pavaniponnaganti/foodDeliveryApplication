import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AppTextComponent } from './dashboard/app-text/app-text.component';
import { LanguageComponent } from './language/language.component';
import { BannerComponent } from './banners/banner/banner.component';
import { WelcomesliderComponent } from './banners/welcomeslider/welcomeslider.component';
import { ManageCitiesComponent } from './manage-cities/manage-cities.component';
import { AppPagesComponent } from './app-pages/app-pages.component';
import { ManageRestaurantsComponent } from './manage-restaurants/manage-restaurants.component';
import { DiscountOffersComponent } from './discount-offers/discount-offers.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { NewOrderComponent } from './manage-orders/new-order/new-order.component';
import { RunningOrdersComponent } from './manage-orders/running-orders/running-orders.component';
import { CancelledOrdersComponent } from './manage-orders/cancelled-orders/cancelled-orders.component';
import { CompletedOrdersComponent } from './manage-orders/completed-orders/completed-orders.component';
import { WelcomesliderAddnewComponent } from './banners/welcomeslider/welcomeslider-addnew/welcomeslider-addnew.component';
import { BannerAddComponent } from './banners/banner/banner-add/banner-add.component';
import { ManageCitiesAddComponent } from './manage-cities/manage-cities-add/manage-cities-add.component';
import { DiscountOffersAddComponent } from './discount-offers/discount-offers-add/discount-offers-add.component';
import { StaffMembersAddComponent } from './staff-members/staff-members-add/staff-members-add.component';
import { NewOrderAddComponent } from './manage-orders/new-order/new-order-add/new-order-add.component';
import { RunningOrdersAddComponent } from './manage-orders/running-orders/running-orders-add/running-orders-add.component';
import { CancelledOrdersAddComponent } from './manage-orders/cancelled-orders/cancelled-orders-add/cancelled-orders-add.component';
import { CompletedOrdersAddComponent } from './manage-orders/completed-orders/completed-orders-add/completed-orders-add.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'app-text',
    component:AppTextComponent
  },
  {
      path:'language',
      component:LanguageComponent
  },
  {
      path:'banner',
      component:BannerComponent
  },
  {
      path:'welcomeslider',
      component:WelcomesliderComponent
  },
  {
    path:'manage-cities',
    component:ManageCitiesComponent
  },
  {
      path:'app-pages',
      component:AppPagesComponent
  },
  {
    path:'manage-restaurants',
    component:ManageRestaurantsComponent
  },
  {
      path:'discountoffers',
      component:DiscountOffersComponent,
  },
  {
     path:'staffmembers',
     component:StaffMembersComponent
  },
  {
    path:'pushnotification',
    component:PushNotificationComponent
 },
 {
  path:'reporting',
  component:ReportingComponent
 },
 {
  path:'app-users',
  component:AppUsersComponent
 },
 {
  path:'new-order',
  component:NewOrderComponent
 },
 {
  path:'running-order',
  component:RunningOrdersComponent
 },
 {
  path:'cancelled-order',
  component:CancelledOrdersComponent
 },
 {
  path:'completed-orders',
  component:CompletedOrdersComponent
 },
 {
   path:'welcomeslider-add',
   component:WelcomesliderAddnewComponent
 },
 {
   path:'banner-add',
   component:BannerAddComponent
 },
 {
   path:'manage-cities-add',
   component:ManageCitiesAddComponent
 },
 {
   path:'discount-offers-add',
   component:DiscountOffersAddComponent
 },
 {
   path:'staff-mem-add',
   component:StaffMembersAddComponent
 },
 {
   path:'new-order-add',
   component:NewOrderAddComponent
 },
 {
   path:'running-order-add',
   component:RunningOrdersAddComponent
 },
 {
   path:'cancelled-order-add',
   component:CancelledOrdersAddComponent
 },
 {
   path:'completed-orders-add',
   component:CompletedOrdersAddComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
