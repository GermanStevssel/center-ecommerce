import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCQrULcOEypjr5Kx0gILywjvylYTFLe7GQ",
	authDomain: "center-ecommerce.firebaseapp.com",
	projectId: "center-ecommerce",
	storageBucket: "center-ecommerce.appspot.com",
	messagingSenderId: "487037391029",
	appId: "1:487037391029:web:57faf51233dd93dbfb6efc",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
