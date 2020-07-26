import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'grafica1', component: ProgressComponent },
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}