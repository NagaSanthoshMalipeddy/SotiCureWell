import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.css']
})
export class ViewSpecializationComponent implements OnInit {

  constructor(public serv:CurewellservService) { }

  ngOnInit(): void {
    this.serv.getAllSpecializations();
  }

  docwithspec(id){
    this.serv.getDocsforSpec(id.textContent);
  }
  hovered = false; // Initialize as false

  // Other component code

  // Function to handle hover event
  onHover() {
    this.hovered = !this.hovered; // Toggle the hover state
  }
}
