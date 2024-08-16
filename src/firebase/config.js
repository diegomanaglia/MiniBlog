import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoB_YxEkXgWWlJTY33hpVt_ok34VIwhVM",
  authDomain: "miniblog-6041d.firebaseapp.com",
  projectId: "miniblog-6041d",
  storageBucket: "miniblog-6041d.appspot.com",
  messagingSenderId: "440388566298",
  appId: "1:440388566298:web:17443f24ba1a72ea59c0a3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };