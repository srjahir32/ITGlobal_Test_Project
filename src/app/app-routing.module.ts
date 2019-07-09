import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserSmartListComponent } from "./user-smart-list/user-smart-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'usersmartlist', component: UserSmartListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
