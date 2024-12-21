import  { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmIBQCmIDQ53XTPS8TXsrQbsF1K2YvGBo",
  authDomain: "register-bf164.firebaseapp.com",
  projectId: "register-bf164",
  storageBucket: "register-bf164.firebasestorage.app",
  messagingSenderId: "381197044729",
  appId: "1:381197044729:web:488c333632fea4c9c5cb28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app } 
