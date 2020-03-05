import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute , private taskService : TaskService)  { }

  ngOnInit() {
    this.getFormData()
  }

  public form
  id = this.route.snapshot.paramMap.get('id') 
  getFormData(){
     
    this.taskService.getTaskById(this.id).subscribe(
      res => {
        this.form = res
      
      
      }
    )
  }

  updateTask(){
    this.taskService.updateTaskById(this.id , this.form).subscribe(
      res=>{
        console.log(res)
      }
    )
 
 
 
 
 
  }

}
