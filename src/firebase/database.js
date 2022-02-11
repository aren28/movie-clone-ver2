// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAwSSMrWbgmX8ttbl9QQgt0lNUZj799VC8",
	authDomain: "movie-clone-a5867.firebaseapp.com",
	databaseURL: "https://movie-clone-a5867-default-rtdb.firebaseio.com",
	projectId: "movie-clone-a5867",
	storageBucket: "movie-clone-a5867.appspot.com",
	messagingSenderId: "160953243721",
	appId: "1:160953243721:web:aa8b6b4546dd45e4dc0798",
	measurementId: "G-GEX3Z9113Q",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
