import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoffComponent } from './logoff/logoff.component';

const routes: Routes = [

  {
    path:'login', component:LoginComponent, pathMatch: 'full',
  },

  {
    path:'', component: LoginComponent, 
  },


  {
    path:'home', component:HomeComponent, 
  },

  {
    path:'about-us', component:AboutUsComponent, 
  },


  {
    path:'logoff', component: LogoffComponent , 
  },
  
  {
    path:'header', component:HeaderComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
