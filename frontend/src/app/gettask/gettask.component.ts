import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-gettask',
  templateUrl: './gettask.component.html',
  styleUrls: ['./gettask.component.css']
})
export class GettaskComponent implements OnInit {

  constructor(private taskService : TaskService , private router : Router) { }
  tasklist
  ngOnInit() {
    this.getAllTask()
    }

    getAllTask(){
      this.taskService.getAllTask().subscribe(
        res => {
          this.tasklist = res
          console.log(this.tasklist)
          console.log('hello')
        }
      )
    }
    updatetask(id){
      this.router.navigate(['update' , id])
      alert(id)
    }

    add(){
      this.router.navigateByUrl('/add')
    }

    delettask(id){
      this.taskService.deleteTaskById(id).subscribe(
        res => {
          console.log(res)
        }
      )
    }

  }
