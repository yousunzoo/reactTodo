import React from 'react';
import AddTodoForm from '../AddTodoForm';
import TabList from '../TabList';

function TodoContainer() {
	return (
		<div>
			<TabList />
			<AddTodoForm />
		</div>
	);
}

export default TodoContainer;
