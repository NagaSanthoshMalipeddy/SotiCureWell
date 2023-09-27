import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorSpecialization } from 'src/app/Model/doctor-specialization.model';
import { CurewellservService } from 'src/app/curewellserv.service';

@Component({
  selector: 'app-add-specialization',
  templateUrl: './add-specialization.component.html',
  styleUrls: ['./add-specialization.component.css']
})
export class AddSpecializationComponent implements OnInit {

  constructor(public serv:CurewellservService,public router:Router) { }

  docid:number;
  spec:DoctorSpecialization=new DoctorSpecialization();

  specCodes:string[];

  docCodes:string[];

  onSubmit(form:NgForm){
    this.serv.getAllSpecializations();
    this.serv.getAllDocsSpecs();
    this.spec.doctorId=this.docid;
    this.spec.specializationDate=new Date();
    alert(this.spec.doctorId+" "+this.spec.specializationCode+" "+this.spec.specializationDate);
    this.serv.addDoctorSpecialization(this.spec).subscribe(res=>{
      this.router.navigate(['/viewDoc']);
    },err=>{
      // console.log(this.spec);
      // console.log(err);
      // alert(err);
    })
  }

  ngOnInit(): void {
    this.docid=this.serv.upddocid;
    this.serv.getAllSpecializations();
    this.serv.getAllDocsSpecs();

    // console.log(this.serv.specList);
    this.specCodes=this.serv.specList.map(item=>item.specializationCode);
    // console.log(this.specCodes);
    // console.log(this.serv.docSpecList);

    // console.log(this.serv.docSpecList);
     this.docCodes=this.serv.docSpecList.filter(d=>{console.log(d.doctorId+" "+this.serv.upddocid); return d.doctorId==this.serv.upddocid;}).map(item=>item.specializationCode);
    console.log(this.docCodes);
     this.specCodes=this.serv.specList.map(s=>s.specializationCode).filter(specCode => !this.docCodes.includes(specCode));
    console.log(this.docCodes);
    console.log(this.specCodes);
    this.spec.doctorId=this.docid;
  }

}
