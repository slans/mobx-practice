import { action, autorun, computed, makeObservable, observable } from 'mobx';
import peopleStore from './people-store';

class TodoStore {
	todos = [
		{
			task: 'First task',
			completed: true,
			assignee: peopleStore[0].name,
		},
	];
	pendingRequest = 0;

	constructor() {
		makeObservable(this, {
			todos: observable,
			pendingRequest: observable,
			completedTodosCount: computed,
			totalTodosCount: computed,
			report: computed,
			addTodo: action,
			renameTask: action,
			toggleTaskCompleted: action,
			makePendingRequest: action,
		});
		autorun(() => console.log(this.report));
	}

	makePendingRequest() {
		this.pendingRequest = 1;
		setTimeout(() => (this.pendingRequest = 0), 3000);
	}

	renameTask(updatedTask, id) {
		const todo = this.todos.find((todo, idx) => idx === id);
		todo.task = updatedTask;
	}

	toggleTaskCompleted(id) {
		const todo = this.todos.find((todo, idx) => idx === id);
		todo.completed = !todo.completed;
	}

	get completedTodosCount() {
		return this.todos.filter((todo) => todo.completed).length;
	}

	get totalTodosCount() {
		return this.todos.length;
	}

	get report() {
		const nextTodo = this.todos.find((todo) => !todo.completed);
		return `Next todo: ${nextTodo ? nextTodo.task : '<none>'}. Progress: ${this.completedTodosCount}/${
			this.totalTodosCount
		}`;
	}

	addTodo(task) {
		this.makePendingRequest();
		this.todos.push({
			task,
			completed: false,
			assignee: null,
		});
	}
}

export default new TodoStore();
