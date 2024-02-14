
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDrxN8vMsyvvOKScWeitttvqfkHjCYNDXE",
  authDomain: "conre-e4f80.firebaseapp.com",
  projectId: "conre-e4f80",
  storageBucket: "conre-e4f80.appspot.com",
  messagingSenderId: "446725406904",
  appId: "1:446725406904:web:b9cce14a33d3919687b44d",
  measurementId: "G-ZG9NY75PF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app; 