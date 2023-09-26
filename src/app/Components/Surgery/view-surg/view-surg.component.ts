import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-surg',
  templateUrl: './view-surg.component.html',
  styleUrls: ['./view-surg.component.css']
})
export class ViewSurgComponent implements OnInit {

  constructor(public serv:CurewellservService,public router:Router) { }
  surgeryDate:string;
  todaySurg:Date;
  ngOnInit(): void {
    this.serv.getSurgeriesForToday();
  }

  setSurgeryDetails(id,did,sd,st,et,sc){
    console.log(id.textContent);
    console.log(did.textContent);
    console.log(sd.textContent);
    console.log(sc.textContent);
    console.log(new Date(sd.textContent));
    this.serv.surgData.surgeryId=id.textContent;
    this.serv.surgData.doctorId=did.textContent;
    this.serv.surgData.surgeryDate=new Date(sd.textContent);
    console.log(this.serv.surgData.surgeryDate);
    this.serv.surgData.surgeryCategory=sc.textContent;
    this.todaySurg=this.serv.surgData.surgeryDate;
    this.surgeryDate=this.serv.surgData.surgeryDate.getDate()+'/'+(this.serv.surgData.surgeryDate.getMonth()+1)+'/'+this.serv.surgData.surgeryDate.getFullYear();
    this.serv.surgData.startTime=0;
    this.serv.surgData.endTime=0;
  }

  hovered = false; // Initialize as false

  // Other component code

  // Function to handle hover event
  onHover() {
    this.hovered = !this.hovered; // Toggle the hover state
  }
  

  onSubmit(form:NgForm){
    this.serv.surgData.surgeryDate=new Date();
    //alert(this.serv.surgData.surgeryDate.getDate()+'/'+(this.serv.surgData.surgeryDate.getMonth()+1)+'/'+this.serv.surgData.surgeryDate.getFullYear());
    this.serv.editSurgeryDetails().subscribe(res=>{
      //this.router.navigate(['/load/viewsurg'])
     
    this.serv.getSurgeriesForToday();
    },err=>{
      alert(err);
    })
  }

}
