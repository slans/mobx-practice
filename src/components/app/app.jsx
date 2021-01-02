import { inject, observer } from 'mobx-react';
import React from 'react';
import { Container, Spinner } from 'reactstrap';
import AddTodo from '../add-todo/add-todo';
import TodoList from '../todo-list/todo-list';
import './app.scss';

const App = ({ todoStore }) => {
	return (
		<Container>
			{todoStore.pendingRequest ? (
				<Spinner />
			) : (
				<>
					<p className='lead'>{todoStore.report}</p>
					<TodoList />
					<AddTodo />
				</>
			)}
		</Container>
	);
};

export default inject('todoStore')(observer(App));
