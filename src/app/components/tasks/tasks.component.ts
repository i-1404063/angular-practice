import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: any = [];
  edit: boolean = false;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getTasks('http://localhost:5000/tasks')
      .subscribe((res) => (this.tasks = res));
  }

  removeTask = (task: any) => {
    this.taskService
      .removeTask(`http://localhost:5000/tasks/${task.id}`)
      .subscribe(
        (res) =>
          (this.tasks = this.tasks.filter((item: any) => item.id !== task.id))
      );
  };

  editTask = (task: any) => {
    this.edit = true;
    this.taskService
      .editTask(`http://localhost:5000/tasks/${task.id}`)
      .subscribe((res) => console.log(res));
  };
}
