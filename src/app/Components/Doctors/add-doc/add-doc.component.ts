import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../../../Model/doctor.model';
import { CurewellservService } from '../../../curewellserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent implements OnInit {

  docDetail:Doctor=new Doctor();
  constructor(public serv:CurewellservService,private router:Router) { 
    this.docDetail.doctorId=0;
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.serv.addDoctor(this.docDetail).subscribe(res=>{
      this.router.navigate(['/viewDoc'])
    },err=>{
      alert(err);
    });
  }

}
