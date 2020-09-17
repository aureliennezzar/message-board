import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase';

const MessagesList = () => {
	const [messages, setMessages] = useState([])
	useEffect(() => {
		db.collection("messages").onSnapshot((querySnapshot) => {
			const newMessages = []
			querySnapshot.forEach((doc) => {
				const { id } = doc
				newMessages.push({ ...doc.data(), id })
			});
			console.log(newMessages);
			setMessages(newMessages)
		});
	}, [])
	return (
		<section className="messages-list">
			<ul>
				{messages.map((message) => {
					return <li key={message.id}>TITRE : {message.title}<br /> USER : {message.username} <br /> MESSAGE : {message.data}<br />------------</li>
				})}
			</ul>
		</section>
	);
}

export default MessagesList;