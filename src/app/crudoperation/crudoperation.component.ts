import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.css']
})
export class CrudoperationComponent {
  employees:any=[];
  model:any=[];
  msg:any;
  addEmployee(){
    this.employees.push(this.model);
    this.model=[];
    this.msg="Added successfully";
    let A=this.myvalue;
    for(let l=0;l<this.employees.length;l++){
      if(l==A){
        this.employees[l]=this.model;
        this.model=[];
        this.msg='updated';
      }
    }

  }
  myvalue;
  editEmployee(i){
    this.model.firstName=this.employees[i].firstName;
    this.model.lastName=this.employees[i].lastName;
    this.model.mail=this.employees[i].email;
    this.model.phoneNumber=this.employees[i].phoneNumber;
    this.msg="successfully updated";
  }

    deleteEmployee(i){;
    this.employees.splice(i,1);
    this.msg="deleted successfully";
  }
}


