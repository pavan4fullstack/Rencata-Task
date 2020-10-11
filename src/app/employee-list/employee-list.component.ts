import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  rowData: any;
  searchText = ''
  myForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rowData = JSON.parse(localStorage.getItem('addData'))
    // this.rowData = rowData.filter(res => {
    //   return res !== null;
    // });
  }

  addEmployee() {
    this.router.navigate(["AddEmployee"]);
  }

  editEmployee(employeeId) {
    this.router.navigate(["EditEmployee/"], {
      queryParams: {
        employeeId: employeeId
      }
    });
  }

  deleteEmployee(i) {
    var result = confirm("Are you sure, you want to delete this Employee?");
    if (result) {
      delete this.rowData[i]
      this.rowData = this.rowData.filter(res => {
        return res !== null;
      });
      localStorage.setItem('addData', JSON.stringify(this.rowData))
      this.router.navigate(["Employees"]);
    }
  }
}
