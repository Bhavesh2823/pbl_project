import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepgComponent } from './home_components/homepg/homepg.component';
import { NavbarComponent } from './home_components/navbar/navbar.component';
import { SidebarComponent } from './home_components/sidebar/sidebar.component';
import { HeaderComponent } from './home_components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { Lab1Component } from './pages/lab1/lab1.component';
import { Lab2Component } from './pages/lab2/lab2.component';
import { Lab3Component } from './pages/lab3/lab3.component';
import { Lab4Component } from './pages/lab4/lab4.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMainComponent } from './home_components/home-main/home-main.component';
import { HoddeskComponent } from './home_components/hoddesk/hoddesk.component';
import { GallaryComponent } from './home_components/gallary/gallary.component';
import { SyllabusComponent } from './home_components/syllabus/syllabus.component';
import { LabComponentComponent } from './lab-component/lab-component.component';
import { Lab5Component } from './pages/lab5/lab5.component';
import { Lab6Component } from './pages/lab6/lab6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepgComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    Lab4Component,
    FooterComponent,
    HomeMainComponent,
    HoddeskComponent,
    GallaryComponent,
    SyllabusComponent,
    LabComponentComponent,
    Lab5Component,
    Lab6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
