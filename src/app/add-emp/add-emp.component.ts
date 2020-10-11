import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  myForm: FormGroup;
  employeeList: any = [];
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    role: ['', Validators.required],
    department: ['', Validators.required],
    skillsets: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    dateOfJoining: ['', Validators.required],
    isActive: ['', Validators.required],
  });
  }

  get name() { return this.myForm.get('name'); }
  get address() { return this.myForm.get('address'); }
  get role() { return this.myForm.get('role'); }
  get department() { return this.myForm.get('department'); }
  get skillsets() { return this.myForm.get('skillsets'); }
  get dateOfBirth() { return this.myForm.get('dateOfBirth'); }
  get dateOfJoining() { return this.myForm.get('dateOfJoining'); }
  get isActive() { return this.myForm.get('isActive'); }

  onSubmit() {
    if(this.myForm.valid) {
      const data = this.myForm.getRawValue();
      // console.log(JSON.stringify(data))
      if (localStorage.getItem("addData")) {
        this.employeeList = JSON.parse(localStorage.getItem('addData'));
        const arr = this.employeeList.push(data);
      } else {
        const arr = this.employeeList.push(data);
      }
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
