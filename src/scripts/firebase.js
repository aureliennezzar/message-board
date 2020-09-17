import firebase from 'firebase';
// Your web app's Firebase configuration
var config = {
	apiKey: "AIzaSyDvnNsNfAFLPvjEpWTHBkNwh3UkD2qeIP0",
	authDomain: "message-board01.firebaseapp.com",
	databaseURL: "https://message-board01.firebaseio.com",
	projectId: "message-board01",
	storageBucket: "message-board01.appspot.com",
	messagingSenderId: "557293432286",
	appId: "1:557293432286:web:3e1cd831602fd6c812414f"
};
// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();