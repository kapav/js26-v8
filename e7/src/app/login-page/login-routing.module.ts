import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AuthService} from '../shared/services/auth.service'
import {AuthGuard} from '../shared/services/auth.guard'

import {LoginPageComponent} from './login-page.component'

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'login',
      component: LoginPageComponent
    }])
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class LoginRoutingModule { }
