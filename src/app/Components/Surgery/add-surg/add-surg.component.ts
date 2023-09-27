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

  ngOnInit(): void {
    this.serv.getDoctors();
    this.serv.getAllSpecializations();
    this.docIds=this.serv.docList.map(doc => doc.doctorId);
    this.surgCats=this.serv.specList.map(spec=>spec.specializationCode);
  console.log(this.docIds);
  console.log(this.surgCats);
  }

}
