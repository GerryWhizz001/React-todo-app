import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDamX0aIIiWY9jKEGEwDsry0Efn2gMtmss",
  authDomain: "todoapp-a50d5.firebaseapp.com",
  projectId: "todoapp-a50d5",
  storageBucket: "todoapp-a50d5.firebasestorage.app",
  messagingSenderId: "896463138953",
  appId: "1:896463138953:web:69def4d22a528077b11658",
  measurementId: "G-D9MSRM8SZW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};
