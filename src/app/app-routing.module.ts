import { AuthGuard } from './Components/Other/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './Components/customers/customers.component';
import { HomeComponent } from './Components/Other/home/home.component';
import { LoginComponent } from './Components/Other/login/login.component';
import { MainComponent } from './Components/Other/main/main.component';
import { ViewDocComponent } from './Components/Doctors/view-doc/view-doc.component';
import { UpdateDocComponent } from './Components/Doctors/update-doc/update-doc.component';
import { ViewSpecializationComponent } from './Components/Speialization/view-specialization/view-specialization.component';
import { DocWithSpecComponent } from './Components/Speialization/doc-with-spec/doc-with-spec.component';
import { AddDocComponent } from './Components/Doctors/add-doc/add-doc.component';
import { ViewSurgComponent } from './Components/Surgery/view-surg/view-surg.component';
import { UpdateSurgeryComponent } from './Components/Surgery/update-surgery/update-surgery.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  {path:'main',component:MainComponent,canActivate:[AuthGuard]},
  {path:'viewDoc',component:ViewDocComponent,canActivate:[AuthGuard]},
  {path:'updateDoc',component:UpdateDocComponent,canActivate:[AuthGuard]},
  {path:'viewSpec',component:ViewSpecializationComponent,canActivate:[AuthGuard]},
  {path:'viewSpec/doctors',component:DocWithSpecComponent,canActivate:[AuthGuard]},
  {path:'addDoc',component:AddDocComponent,canActivate:[AuthGuard]},
  {path:'viewSurg',component:ViewSurgComponent,canActivate:[AuthGuard]},
  {path:'viewSurg/updateSurg',component:UpdateSurgeryComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
