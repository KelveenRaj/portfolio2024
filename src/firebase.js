import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoz4vDLOV--Fv0JxvnLTI6jFEPFEENeyg",
  authDomain: "kelveen-s-portfolio.firebaseapp.com",
  projectId: "kelveen-s-portfolio",
  storageBucket: "kelveen-s-portfolio.appspot.com",
  messagingSenderId: "40344346451",
  appId: "1:40344346451:web:5a448be252c10d08d50ba6",
  measurementId: "G-W9TFFR95Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
