import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBDSVXJogPN3UlybFFuADFgOIlwZdiEwmc",
	authDomain: "rn-uber-eats-944c6.firebaseapp.com",
	projectId: "rn-uber-eats-944c6",
	storageBucket: "rn-uber-eats-944c6.appspot.com",
	messagingSenderId: "348212056672",
	appId: "1:348212056672:web:4f5e3eb13b947cc062a905",
	measurementId: "G-6LXS04LQR7",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
