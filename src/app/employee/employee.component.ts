import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpServiceService } from '../emp-service.service';
import { Edata } from '../Edata';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public response : any;
  constructor(public service:EmpServiceService) { 
    this.service.getPosts().subscribe(result=>{
this.response=result['data'];
console.log(this.response);
    })
  }

  ngOnInit(): void {
  }

}
