import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AuthGuard } from '../shared/services/auth.guard'

import { AdminPageComponent } from './admin-page.component'
import { AdminPhraseComponent } from '../shared/components/admin-phrase/admin-phrase.component'
import { AdminUserComponent } from '../shared/components/admin-user/admin-user.component'

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{
      path: 'admin',
      component: AdminPageComponent,
      canActivate: [AuthGuard],
      children: [{
        path: '',
        children: [
          { path: 'phrase', component: AdminPhraseComponent },
          { path: 'user', component: AdminUserComponent },
          { path: '', redirectTo: 'phrase', pathMatch: 'full' }
        ]
      }]
    }])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
