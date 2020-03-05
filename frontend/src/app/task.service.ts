import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  TaskUrl = 'http://localhost:3000/'
  
  
  AddTask(data):Observable<any>{
    return this.http.post(this.TaskUrl + 'addtask' , data)
  }
  
  getAllTask():Observable<any>{
    return this.http.get(this.TaskUrl + 'gettask')
  }

  getTaskById(id):Observable<any>{
    return this.http.get(this.TaskUrl+'gettask/'+id)
  }

  updateTaskById(id , task):Observable<any>{
    return this.http.put(this.TaskUrl+'puttask/'+id ,task)
  }

  deleteTaskById(id):Observable<any>{
    return this.http.delete(this.TaskUrl+'deletetask/'+id)
  }

}
