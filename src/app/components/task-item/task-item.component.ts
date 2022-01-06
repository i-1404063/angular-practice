import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  @Input() edit: boolean;

  constructor() {
    this.edit = false;
  }

  ngOnInit(): void {}
}
