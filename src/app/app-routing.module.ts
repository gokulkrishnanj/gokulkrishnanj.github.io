import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { SkillsComponent } from './component/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: SkillsComponent
  },
  {
    path: 'contact-us',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
