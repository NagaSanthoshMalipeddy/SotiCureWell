import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Specialization } from 'src/app/Model/specialization.model';
import { CurewellservService } from 'src/app/curewellserv.service';

@Component({
  selector: 'app-add-spec',
  templateUrl: './add-spec.component.html',
  styleUrls: ['./add-spec.component.css']
})
export class AddSpecComponent implements OnInit {

  constructor(public serv:CurewellservService,public router:Router) { }

  specDetail:Specialization=new Specialization();


  ngOnInit(): void {
    this.serv.getAllSpecializations()
  }

  onSubmit(form:NgForm){
    alert(this.specDetail.specializationCode+" "+this.specDetail.specializationName)
    this.serv.addSpecialization(this.specDetail).subscribe(res=>{
      this.router.navigate(['/viewSpec'])
    },
    err=>{
      console.log(err);
      alert(err);
    })
  }

  checkSpecializationCodeExists(code: string): boolean {
    if(code==undefined){
      return false;
    }
    const existingSpecialization = this.serv.specList.find(spec => spec.specializationCode === code);
    return !!existingSpecialization; // Returns true if found, false otherwise
  }
  

}
