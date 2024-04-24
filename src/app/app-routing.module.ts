import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Lab1Component } from './pages/lab1/lab1.component';
import { Lab2Component } from './pages/lab2/lab2.component';
import { Lab3Component } from './pages/lab3/lab3.component';
import { Lab4Component } from './pages/lab4/lab4.component';
import { Lab5Component } from './pages/lab5/lab5.component';
import { Lab6Component } from './pages/lab6/lab6.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'lab1', component:Lab1Component},
  {path:'lab2', component:Lab2Component},
  {path:'lab3', component:Lab3Component},
  {path:'lab4', component:Lab4Component},
  {path:'lab5', component:Lab5Component},
  {path:'lab6', component:Lab6Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
