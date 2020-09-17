import React from 'react';
import './App.css';
import MessageForm from './components/MessageForm/MessageForm';
import MessagesList from './components/MessagesList/MessagesList';

function App() {
	return (
		<section className="App">
			<h1>Message Board</h1>
			<MessageForm />
			<MessagesList />
		</section>
	);
}

export default App;
