import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase';
import Message from '../Message/Message';
import './MessagesList.css'

const MessagesList = () => {
	const [messages, setMessages] = useState([])
	useEffect(() => {
		db.collection("messages").onSnapshot((querySnapshot) => {
			const newMessages = []
			querySnapshot.forEach((doc) => {
				const { id } = doc
				newMessages.push({ ...doc.data(), id })
			});
			setMessages(newMessages)
		});
	}, [])
	return (
		<section className="messages-section">
			<ul className="messages-list">
				{messages.map((message) => {
					const { username, data, id, time } = message
					return <Message username={username} data={data} id={id} time={time} />
				})}
			</ul>
		</section>
	);
}

export default MessagesList;