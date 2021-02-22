import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { CategoryMenuComponent } from './categorymenu/categorymenu.component';
import { SearchBarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavBarComponent, TopBannerComponent, CategoryMenuComponent, SearchBarComponent
  ],
  imports: [
    BrowserModule//, HomeComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }