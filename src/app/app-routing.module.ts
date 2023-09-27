import { AuthGuard } from './Components/Other/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AddSpecComponent } from './Components/Speialization/add-spec/add-spec.component';
import { AddSurgComponent } from './Components/Surgery/add-surg/add-surg.component';
import { AddSpecializationComponent } from './Components/Doctors/add-specialization/add-specialization.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'main',component:MainComponent,canActivate:[AuthGuard]},
  {path:'viewDoc',component:ViewDocComponent,canActivate:[AuthGuard]},
  {path:'updateDoc',component:UpdateDocComponent,canActivate:[AuthGuard]},
  {path:'viewSpec',component:ViewSpecializationComponent,canActivate:[AuthGuard]},
  {path:'viewSpec/doctors',component:DocWithSpecComponent,canActivate:[AuthGuard]},
  {path:'addDoc',component:AddDocComponent,canActivate:[AuthGuard]},
  {path:'viewSurg',component:ViewSurgComponent,canActivate:[AuthGuard]},
  {path:'viewSurg/updateSurg',component:UpdateSurgeryComponent,canActivate:[AuthGuard]},
  {path:'viewSpec/addSpec',component:AddSpecComponent,canActivate:[AuthGuard]},
  {path:'viewSurg/addSurg',component:AddSurgComponent,canActivate:[AuthGuard]},
  {path:'viewDoc/addSpecialization',component:AddSpecializationComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
