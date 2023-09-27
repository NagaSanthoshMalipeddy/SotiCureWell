import { Injectable } from '@angular/core';
import { Doctor } from './Model/doctor.model';
import { Specialization } from './Model/specialization.model';
import { DoctorSpecialization } from './Model/doctor-specialization.model';
import { Surgery } from './Model/surgery.model';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CurewellservService {

 
  apiurl1="http://localhost:5001/api/Doctors"; //GET POST PUT
  apiurl2="http://localhost:5001/api/Specializations"; //GET 
  apiurl3="http://localhost:5001/api/DoctorSpecializations";//Get("SpecializationCode")
  apiurl4="http://localhost:5001/api/Surgeries";
  addDoc="http://localhost:5001/api/Doctors";

  docList:Doctor[];
  specList:Specialization[];
  docSpecList:DoctorSpecialization[];
  surgList:Surgery[];
  docForSpec:Doctor[];

  constructor(private obj:HttpClient,private jwtHelper: JwtHelperService) { }

  public docData:Doctor=new Doctor();
  public surgData:Surgery=new Surgery();

  getDoctors(){
    this.obj.get(this.apiurl1).toPromise().then(res=>this.docList=res as Doctor[]);
  }

  getAllSpecializations(){
    this.obj.get(this.apiurl2).toPromise().then(res=>this.specList=res as Specialization[])
  }
  getAllDocsSpecs(){
    this.obj.get(this.apiurl3).toPromise().then(res=>this.docSpecList=res as DoctorSpecialization[])
  }
  getSurgeriesForToday(){
    this.obj.get(this.apiurl4).toPromise().then(res=>this.surgList=res as Surgery[])
  }

  getDocsforSpec(code:string){
    return this.obj.get(this.apiurl3+'/'+code).toPromise().then(res=>this.docForSpec=res as Doctor[])
  }

  addDoctor(docDetail:Doctor){
    return this.obj.post(this.addDoc,docDetail);
  }

  removeDoctor(id){
    return this.obj.delete(this.apiurl1+'/'+id);
  }

  addSurgery(surgDetail:Surgery){
    return this.obj.post(this.apiurl4,surgDetail);
  }

  addSpecialization(specDetail:Specialization){
    return this.obj.post(this.apiurl2,specDetail);
  }

  addDoctorSpecialization(docSpecDetail:DoctorSpecialization){
    return this.obj.post(this.apiurl3,docSpecDetail);
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
  }

navvisible:boolean=localStorage.getItem("username")!=null;
username:string=localStorage.getItem("username");


  upddocid:number=0;

  editDoctorDetails(docDetail:Doctor){
    return this.obj.put(this.apiurl1+'/'+docDetail.doctorId,docDetail);
  }

  editSurgeryDetails(){
    return this.obj.put(this.apiurl4+'/'+this.surgData.surgeryId,this.surgData);
  }


}