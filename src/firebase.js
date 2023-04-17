import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTgMEhQ5whFGKeT_LU5MJLWJeVBeLm0A8",
  authDomain: "crmauth-377305.firebaseapp.com",
  projectId: "crmauth-377305",
  storageBucket: "crmauth-377305.appspot.com",
  messagingSenderId: "1020925127780",
  appId: "1:1020925127780:web:d9fc8257f6b882cbc84371"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)