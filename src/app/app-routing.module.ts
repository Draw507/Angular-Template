import { Routes, RouterModule } from '@angular/router';
import { NopageFoundComponent } from './shared/nopage-found/nopage-found.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: NopageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
