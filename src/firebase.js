import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLUTCMs3CyilabL75F_XaN_nIhEvyqmt0",
  authDomain: "twitter-clone-react-14c0a.firebaseapp.com",
  projectId: "twitter-clone-react-14c0a",
  storageBucket: "twitter-clone-react-14c0a.appspot.com",
  messagingSenderId: "609987441806",
  appId: "1:609987441806:web:f7f61c653c41a462be05df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
