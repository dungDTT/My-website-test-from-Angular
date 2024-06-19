import { Routes, RouterModule  } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FromRxjsComponent } from './from-rxjs/from-rxjs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title:"Trang chủ" },
  { path: 'lien-he', component: ContactComponent, title:"Liên hệ" },
  { path: 've-website', component: AboutComponent, title:"Về website" },
  { path: 'test', component: FromRxjsComponent, title:"OK"},
  //{ path: 'about', redirectTo: '/gioi-thieu.html', pathMatch: 'full' },
  //{ path: 'contact', redirectTo: '/lien-he.html', pathMatch: 'full' },
  
  { path: '**', component: NotFoundComponent, title:"Not Found"}, // Không bao giờ để path dưới path not found
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }),CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
