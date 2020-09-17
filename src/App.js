import React from 'react';
import './App.css';
import MessageForm from './components/MessageForm/MessageForm';
import MessagesList from './components/MessagesList/MessagesList';

function App() {
	return (
		<section className="App">
			<div className="title-wrap">
				<h1>Message Board</h1>
				<p>v4.2.0</p>
			</div>
			<MessageForm />
			<MessagesList />
		</section>
	);
}

export default App;
