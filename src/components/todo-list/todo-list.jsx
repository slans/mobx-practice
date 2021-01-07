import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { List } from 'reactstrap';
import TodoItem from './todo-item';

const TodoList = ({ todoStore }) => {
	// console.log('render list', todoStore.todos);
	useEffect(() => {
		todoStore.getTodos();
	}, []);

	if (todoStore.error) {
		return <p>{todoStore.error}</p>;
	}

	return todoStore.todos.length ? (
		<List>
			{todoStore.todos.map((todo, idx) => (
				<TodoItem todo={todo} key={todo.id} handleChange={() => todoStore.toggleTodo(todo.id)} />
			))}
		</List>
	) : null;
};

export default inject('todoStore')(observer(TodoList));
