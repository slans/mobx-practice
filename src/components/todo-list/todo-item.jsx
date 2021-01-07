import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Input } from 'reactstrap';

function TodoItem({ todo, handleChange }) {
	// console.log('render item');

	return (
		<li>
			<Input type='checkbox' checked={todo.completed} onChange={handleChange} />
			{todo.title}
		</li>
	);
}

export default observer(TodoItem);
