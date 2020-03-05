import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettaskComponent } from './gettask/gettask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';


const routes: Routes = [
  {path : '' , component : GettaskComponent},
  {path : 'all' , component : GettaskComponent},
  {path : 'add' , component : AddtaskComponent},
  {path : 'update/:id' , component : UpdatetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
