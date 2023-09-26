import { AuthGuard } from './Components/Other/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Other/login/login.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { HomeComponent } from './Components/Other/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Components/Other/nav/nav.component';
import { MainComponent } from './Components/Other/main/main.component';
import { ViewDocComponent } from './Components/Doctors/view-doc/view-doc.component';
import { UpdateDocComponent } from './Components/Doctors/update-doc/update-doc.component';
import { ViewSpecializationComponent } from './Components/Speialization/view-specialization/view-specialization.component';
import { DocWithSpecComponent } from './Components/Speialization/doc-with-spec/doc-with-spec.component';
import { AddDocComponent } from './Components/Doctors/add-doc/add-doc.component';
import { ViewSurgComponent } from './Components/Surgery/view-surg/view-surg.component';
import { UpdateSurgeryComponent } from './Components/Surgery/update-surgery/update-surgery.component';


export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    ViewDocComponent,
    UpdateDocComponent,
    ViewSpecializationComponent,
    DocWithSpecComponent,
    AddDocComponent,
    ViewSurgComponent,
    UpdateSurgeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    }),
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
