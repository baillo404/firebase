// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgskMwi4smugJVveEo9aXtDz0PU8THLos",
  authDomain: "odc-crud-2b191.firebaseapp.com",
  databaseURL: "https://odc-crud-2b191-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "odc-crud-2b191",
  storageBucket: "odc-crud-2b191.appspot.com",
  messagingSenderId: "191596069658",
  appId: "1:191596069658:web:718a3cd7f9a8aaed6da2a3",
  measurementId: "G-GC57EQ6FH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;