import { Component } from '@angular/core';
import BackendService from './../backend.service';

import { Todo } from './../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  ngFormControl: any = {} // for adding todos

  private backend: BackendService;
  todos : Todo[];

  constructor(backend: BackendService) {
    this.backend = backend;
    this.todos = [];
    this.refresh();
  }

  async refresh() {
    console.log("REFRESH");
    this.todos = await this.backend.getTodos();
  }

  async addTodo(title: string, description: string) {
    console.log("ADD", title, description);
    let r = await this.backend.addTodo({ id: -1, title, description });
    this.todos.push(r);
    //this.refresh();
  }

  async deleteTodo(id: number) {
    console.log("DELETE", id);
    await this.backend.deleteTodo(id);
    this.refresh(); // or remove id manually
  }

}
