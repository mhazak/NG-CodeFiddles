import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingComponent } from './pages/coding/coding.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [UserGuard], pathMatch: 'full'},
	{ path: 'login', component: LoginComponent },
	{ path: 'create-account', component: CreateAccountComponent },
	{ path: 'coding/:id', component: CodingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
