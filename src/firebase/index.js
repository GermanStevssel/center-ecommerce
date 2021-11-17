import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCQrULcOEypjr5Kx0gILywjvylYTFLe7GQ",
	authDomain: "center-ecommerce.firebaseapp.com",
	projectId: "center-ecommerce",
	storageBucket: "center-ecommerce.appspot.com",
	messagingSenderId: "487037391029",
	appId: "1:487037391029:web:57faf51233dd93dbfb6efc",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
