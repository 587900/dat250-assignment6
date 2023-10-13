import { Todo } from './types';
import { SERVER_URL } from './constants';

export default class BackendService {

    constructor() {

    }

    // why does it not recognize 'Response#json()' (or ANY other method for that matter?)
    // why does Angular default imports (dom, ES2022) not have Promises ???
    public async getTodos(): Promise<Todo[]> {
        let data: APITodo[] = await fetch(SERVER_URL + '/todos').then((e: any) => e.json());
        return data.map(t => this.fromAPI(t));
    }

    public async addTodo(todo: Todo): Promise<Todo> {
        let options = { method: 'POST', body: JSON.stringify(this.toAPI(todo)), headers: { 'Content-Type': 'application/json' } }
        let data: APITodo = await fetch(SERVER_URL + '/todos', options).then((e: any) => e.json());
        return this.fromAPI(data);
    }

    public async deleteTodo(id: number) {
        return await fetch(SERVER_URL + '/todos/' + id, { method: 'DELETE' }).then((e: any) => e.text());
    }

    private toAPI(todo: Todo): APITodo {
        return { id: todo.id, description: todo.title, summary: todo.description };
    }

    private fromAPI(todo: APITodo): Todo {
        return { id: todo.id, title: todo.description, description: todo.summary };
    }

}

type APITodo = { id: number, summary: string, description: string }