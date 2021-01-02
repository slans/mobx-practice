import { inject, observer } from 'mobx-react';
import React from 'react';
import { Button } from 'reactstrap';

const AddTodo = ({ todoStore }) => {
	const handleCreateTodo = () => {
		const newTodo = prompt('Enter new todo', 'Make coffee');
		newTodo && todoStore.addTodo(newTodo);
	};

	return (
		<div>
			<Button color='primary' className='mr-3' onClick={handleCreateTodo}>
				New Todo
			</Button>
			<span>(double-click a todo to edit)</span>
		</div>
	);
};

export default inject('todoStore')(observer(AddTodo));