import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [

  { path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)

  },


  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },

  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },

  { path: 'fooldal', loadChildren: () => import('./pages/fooldal/fooldal.module').then(m => m.FooldalModule) },
  {
    path:'',
    redirectTo:'/fooldal',
    pathMatch:'full'
  },

  { path: 'profil', loadChildren: () => import('./pages/profil/profil.module').then(m => m.ProfilModule), canActivate:[AuthGuard] },

  { path: 'hirdetesfel', loadChildren: () => import('./pages/hirdetesfel/hirdetesfel.module').then(m => m.HirdetesfelModule), canActivate:[AuthGuard] },

  { path: 'hirdetesek', loadChildren: () => import('./pages/hirdetesek/hirdetesek.module').then(m => m.HirdetesekModule) },

  { path: 'hirdeteseim', loadChildren: () => import('./pages/hirdeteseim/hirdeteseim.module').then(m => m.HirdeteseimModule),canActivate:[AuthGuard] },

  { path: 'egyhirdetes', loadChildren: () => import('./pages/egyhirdetes/egyhirdetes.module').then(m => m.EgyhirdetesModule), canActivate:[AuthGuard] },

  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },

  { path: 'otherprof', loadChildren: () => import('./pages/otherprof/otherprof.module').then(m => m.OtherprofModule),canActivate:[AuthGuard] },
  {
    path:'**',
    redirectTo:'/not-found',

  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
