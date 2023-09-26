import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';
import { NgForm } from '@angular/forms';
import { Doctor } from '../../../Model/doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-doc',
  templateUrl: './update-doc.component.html',
  styleUrls: ['./update-doc.component.css']
})
export class UpdateDocComponent implements OnInit {

  constructor( public serv:CurewellservService,private router:Router) { }

  docDetail:Doctor=new Doctor();
  
  docid:number;
  ngOnInit(): void {
    this.docid=this.serv.upddocid;
    this.docDetail.doctorId=this.serv.upddocid;
    console.log(this.docDetail.doctorId);
  }


  onSubmit(form:NgForm){
    console.log(this.docDetail.doctorName);
    this.serv.editDoctorDetails(this.docDetail).subscribe(res=>{
      this.router.navigate(['/viewDoc'])
    },
    err=>{
      alert("Unable to update doctor details");
    });
  }

}
