import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUGD9rKcEHpPLD2-rkn4aJq0hzn6ojUmA",
  authDomain: "felina-89291.firebaseapp.com",
  projectId: "felina-89291",
  databaseURL:
    "https://felina-89291-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "felina-89291.appspot.com",
  messagingSenderId: "892587072991",
  appId: "1:892587072991:web:1d466ec2caccbe0992386a",
  measurementId: "G-3FMDDC0134",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
