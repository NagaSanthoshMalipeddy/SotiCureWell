import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurewellservService } from '../../../curewellserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent implements OnInit {

  constructor(public serv:CurewellservService,public router:Router) { }
  surgeryDate:string;
  todaySurg:Date;
  ngOnInit(): void {
    alert(this.serv.surgData.surgeryDate);
    this.todaySurg=this.serv.surgData.surgeryDate;
    this.surgeryDate=this.serv.surgData.surgeryDate.getDate()+'/'+(this.serv.surgData.surgeryDate.getMonth()+1)+'/'+this.serv.surgData.surgeryDate.getFullYear();
    this.serv.surgData.startTime=0;
    this.serv.surgData.endTime=0;
  }
  

  onSubmit(form:NgForm){
    this.serv.surgData.surgeryDate=new Date();
    //alert(this.serv.surgData.surgeryDate.getDate()+'/'+(this.serv.surgData.surgeryDate.getMonth()+1)+'/'+this.serv.surgData.surgeryDate.getFullYear());
    this.serv.editSurgeryDetails().subscribe(res=>{
      this.router.navigate(['/viewSurg'])
    },err=>{
      alert(err);

    })
  }

}
