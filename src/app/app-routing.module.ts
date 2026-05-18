import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './component/about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  },
  {
    path: 'home',
    component: AboutMeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
