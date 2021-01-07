import { action, autorun, computed, makeObservable, observable, configure, runInAction, flow } from 'mobx';

configure({ enforceActions: 'observed' });

class TodoStore {
	constructor() {
		makeObservable(this, {
			todos: observable,
			error: observable,
			totalTodosCount: computed,
			unfinishedTodosCount: computed,
			toggleTodo: action,
			addTodo: action,
			getTodos: flow,
		});
		autorun(() => console.log(this.report));
	}

	todos = [];
	error = '';

	*getTodos() {
		try {
			const response = yield fetch('https://jsonplaceholder.typicode.com/todos/?userId=1');
			const result = yield response.json();
			this.todos = result;
		} catch (error) {
			this.error = 'Some error occured';
		}
	}

	toggleTodo(id) {
		const todo = this.todos.find((todo) => (todo.id = id));
		todo.completed = !todo.completed;
	}

	addTodo(task) {
		this.todos.push({
			task,
			finished: false,
		});
	}

	get unfinishedTodosCount() {
		return this.todos.filter((todo) => !todo.completed).length;
	}

	get totalTodosCount() {
		return this.todos.length;
	}

	get report() {
		return `Todos: ${this.unfinishedTodosCount}/${this.totalTodosCount}`;
	}
}

export default new TodoStore();
