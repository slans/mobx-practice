import { inject, observer } from 'mobx-react';
import React from 'react';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';

const TodoList = ({ todoStore }) => {
	const handleRename = (idx) => {
		const updatedTask = prompt('Enter updated task', 'Some updated task');
		updatedTask && todoStore.renameTask(updatedTask, idx);
	};

	const todoListItems = todoStore.todos.map((todo, idx) => (
		<ListGroupItem key={idx} onDoubleClick={() => handleRename(idx)}>
			<Input type='checkbox' checked={todo.completed} onChange={() => todoStore.toggleTaskCompleted(idx)} /> {todo.task}{' '}
			{todo.assignee}
		</ListGroupItem>
	));
	return <ListGroup>{todoListItems}</ListGroup>;
};

export default inject('todoStore')(observer(TodoList));
