import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AppTextComponent } from './dashboard/app-text/app-text.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomesliderComponent } from './banners/welcomeslider/welcomeslider.component';
import { BannerComponent } from './banners/banner/banner.component';
import { LanguageComponent } from './language/language.component';
import { ManageCitiesComponent } from './manage-cities/manage-cities.component';
import { AppPagesComponent } from './app-pages/app-pages.component';
import { ManageRestaurantsComponent } from './manage-restaurants/manage-restaurants.component';
import { DiscountOffersComponent } from './discount-offers/discount-offers.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { NewOrderComponent } from './manage-orders/new-order/new-order.component';
import { RunningOrdersComponent } from './manage-orders/running-orders/running-orders.component';
import { CancelledOrdersComponent } from './manage-orders/cancelled-orders/cancelled-orders.component';
import { CompletedOrdersComponent } from './manage-orders/completed-orders/completed-orders.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { WelcomesliderAddnewComponent } from './banners/welcomeslider/welcomeslider-addnew/welcomeslider-addnew.component';
import { BannerAddComponent } from './banners/banner/banner-add/banner-add.component';
import {FormsModule} from '@angular/forms';
import { ManageCitiesAddComponent } from './manage-cities/manage-cities-add/manage-cities-add.component';
import { DiscountOffersAddComponent } from './discount-offers/discount-offers-add/discount-offers-add.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    AppTextComponent,
    WelcomesliderComponent,
    BannerComponent,
    LanguageComponent,
    ManageCitiesComponent,
    AppPagesComponent,
    ManageRestaurantsComponent,
    DiscountOffersComponent,
    StaffMembersComponent,
    NewOrderComponent,
    RunningOrdersComponent,
    CancelledOrdersComponent,
    CompletedOrdersComponent,
    PushNotificationComponent,
    ReportingComponent,
    AppUsersComponent,
    WelcomesliderAddnewComponent,
    BannerAddComponent,
    ManageCitiesAddComponent,
    DiscountOffersAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
