import React, { useState } from 'react';
import { db } from '../../scripts/firebase'
import "./MessageForm.css"

const MessageForm = () => {
	const [state, setState] = useState({
		username: "",
		data: ""
	})
	const { username, title, data } = state
	const handleSubmit = (e) => {
		e.preventDefault()
		if (username.length && data.length) {
			db.collection("messages").add({
				username,
				time: Date.now(),
				data
			})
		}
		setState({
			username: "",
			data: ""
		})
	}
	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}
	return (
		<form
			className="message-form"
			onSubmit={handleSubmit}>
			<label htmlFor="username">Nom d'utilisateur</label>
			<input type="text" name="username" placeholder="Écrire ici" value={username} onChange={handleChange}></input>
			<label htmlFor="data">Texte</label>
			<textarea type="text" name="data" placeholder="Écrire ici" value={data} onChange={handleChange}></textarea>
			<button type="submit">Envoyer le pigeon voyageur</button>
		</form>
	);
}

export default MessageForm;