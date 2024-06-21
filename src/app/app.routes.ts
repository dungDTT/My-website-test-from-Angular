import { Routes, RouterModule  } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { testformComponent } from './test-form/test-form.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FromRxjsComponent } from './from-rxjs/from-rxjs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title:"Trang chủ" },
  { path: 'test', component:testformComponent, title:"Mini project" },
  { path: 've-website', component: AboutComponent, title:"Về website" },
  { path: 'ok', component: FromRxjsComponent, title:"OK"},
  
  //{ path: 'about', redirectTo: '/gioi-thieu.html', pathMatch: 'full' },
  //{ path: 'contact', redirectTo: '/lien-he.html', pathMatch: 'full' },
  
  { path: '**', component: NotFoundComponent, title:"Not Found"}, // Không bao giờ để path dưới path not found
];

