import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  myForm: FormGroup;
  employeeList: any = [];
  param1: any;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param1 = params['employeeId'];
    });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [],
      address: [],
      role: [],
      department: [],
      skillsets: [],
      dateOfBirth: [],
      dateOfJoining: [],
      isActive: [],
    });
    this.employeeList = JSON.parse(localStorage.getItem('addData'))
    let obj = this.employeeList[this.param1]
    this.myForm.get('name').setValue(obj.name);
    this.myForm.get('address').setValue(obj.address);
    this.myForm.get('role').setValue(obj.role);
    this.myForm.get('department').setValue(obj.department);
    this.myForm.get('skillsets').setValue(obj.skillsets);
    this.myForm.get('dateOfBirth').setValue(obj.dateOfBirth);
    this.myForm.get('dateOfJoining').setValue(obj.dateOfJoining);
    this.myForm.get('isActive').setValue(obj.isActive);
  }

  onUpdate() {
    if(this.myForm.valid) {
      const data = this.myForm.getRawValue();
      this.employeeList = JSON.parse(localStorage.getItem('addData'));
      this.employeeList[this.param1]= data
      localStorage.setItem('addData', JSON.stringify(this.employeeList))
      this.router.navigate(["Employees"]);
    } else {
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);         
        control.markAsTouched({ onlySelf: true });   
      });
    }
  }
}