import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

//@ViewChild('addtaskForm', {static: false})  addtaskForm: NgForm;


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent implements OnInit {
  
  constructor(private taskService : TaskService ,  private _router: Router) { }

public name
  public form = {
    
  }
  
  priority = ["high" , "medium" , "low"]
  ngOnInit() {
  }

  addTask(){
    this.taskService.AddTask(this.form).subscribe(
      res => {
     //  alert(this.form)
     this._router.navigate(['all'])
     // addtaskForm.form.reset
      }
    )

   
  }
}
