import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MemberDetailComponent } from "./member-detail/member-detail.component";

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);