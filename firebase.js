import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDx-IYFzvwekuBFA_c49YsjHRTQ6wCZaVM",
  authDomain: "sturdy-dragon-299320.firebaseapp.com",
  databaseURL: "https://sturdy-dragon-299320-default-rtdb.firebaseio.com",
  projectId: "sturdy-dragon-299320",
  storageBucket: "sturdy-dragon-299320.appspot.com",
  messagingSenderId: "1062463087676",
  appId: "1:1062463087676:web:7aae409b05782d252e4f39",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
