import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor.model';
import { Surgery } from 'src/app/Model/surgery.model';
import { CurewellservService } from 'src/app/curewellserv.service';

@Component({
  selector: 'app-add-surg',
  templateUrl: './add-surg.component.html',
  styleUrls: ['./add-surg.component.css']
})
export class AddSurgComponent implements OnInit {

  constructor(public serv:CurewellservService,public router:Router) { }

  surgDetail:Surgery=new Surgery();

  docIds:number[];
  surgCats:string[];

  onSubmit(form:NgForm){

    this.serv.addSurgery(this.surgDetail).subscribe(res=>{
      this.router.navigate(['/viewSurg']);
    },err=>{
      alert(err);
    })

  }

  updateDoctorIds() {
    this.docIds = this.serv.docSpecList.filter(d => d.specializationCode == this.surgDetail.surgeryCategory).map(d => d.doctorId);
    console.log(this.docIds);
  }

  // ngOnInit(): void {
  //   this.serv.getDoctors();
  //   this.serv.getAllSpecializations();
    
  //   // this.docIds=this.serv.docList.map(doc => doc.doctorId);
  //   this.surgCats=this.serv.specList.map(spec=>spec.specializationCode);
  //   this.surgDetail.surgeryCategory=this.surgCats.length!=0?this.surgCats[0]:null;
  //   this.docIds=this.serv.docSpecList.filter(d=>d.specializationCode==this.surgDetail.surgeryCategory).map(d=>d.doctorId);
  //   this.updateDoctorIds();
  // console.log(this.docIds);
  // console.log(this.surgCats);
  // }
  ngOnInit(): void {
    this.serv.getDoctors();
    this.serv.getAllSpecializations();
    this.serv.getAllDocsSpecs();
    this.surgCats = this.serv.specList.map(spec => spec.specializationCode);
  
    // Initialize docIds initially (e.g., based on the default category)
    // You can replace 'defaultCategory' with the initial value you want.
    this.surgDetail.surgeryCategory = this.surgCats.length!=0?this.surgCats[0]:null;
  
    if (this.serv.docSpecList) {
      this.updateDoctorIds();
    } else {
      // Assuming serv.getDocSpecList() is an asynchronous method, you might need to subscribe to it to ensure it's loaded.
      this.serv.getAllDocsSpecs();
      this.updateDoctorIds();
    }
  
    console.log(this.docIds);
    console.log(this.surgCats);
  }
  

}
