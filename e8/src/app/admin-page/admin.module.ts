import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module'

import { AdminPageComponent } from './admin-page.component'
import {AdminPhraseComponent} from '../shared/components/admin-phrase/admin-phrase.component'
import {AdminUserComponent} from '../shared/components/admin-user/admin-user.component'

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminPhraseComponent,
    AdminUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
