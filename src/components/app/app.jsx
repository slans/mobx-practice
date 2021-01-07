import React from 'react';
import { Container, Spinner } from 'reactstrap';
import AddTodo from '../add-todo/add-todo';
import TodoList from '../todo-list/todo-list';
import './app.scss';

const App = () => {
	return (
		<Container>
			<TodoList />
			<AddTodo />
		</Container>
	);
};

export default App;
