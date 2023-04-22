import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOHmE1BG4lhnJzo1FayKA-d1W6Adpb4fU",
  authDomain: "ema-john-firebase-auth-c891b.firebaseapp.com",
  projectId: "ema-john-firebase-auth-c891b",
  storageBucket: "ema-john-firebase-auth-c891b.appspot.com",
  messagingSenderId: "468462779548",
  appId: "1:468462779548:web:d5da34389238586f4b0159"
};

const app = initializeApp(firebaseConfig);

export default app;