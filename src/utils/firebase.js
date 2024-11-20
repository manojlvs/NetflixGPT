// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0XiTb-AP5RoOOjE30i3Q40oap-kEkVr8",
  authDomain: "netflix-gpt-3a407.firebaseapp.com",
  projectId: "netflix-gpt-3a407",
  storageBucket: "netflix-gpt-3a407.appspot.com",
  messagingSenderId: "48099714466",
  appId: "1:48099714466:web:fde0ffd724b31889bfbefb",
  measurementId: "G-603J895ZVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();