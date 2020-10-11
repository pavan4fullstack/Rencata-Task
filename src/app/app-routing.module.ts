import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';


const routes: Routes = [
  { path:"Employees", component:EmployeeListComponent },
  { path:"AddEmployee", component:AddEmpComponent },
  { path:"EditEmployee", component:EditEmpComponent },
  { path:"**", redirectTo:'Employees' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
