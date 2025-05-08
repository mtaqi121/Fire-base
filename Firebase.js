  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCPfPp9q33M7gUwwKYNAACN4YSj-dgzMFU",
    authDomain: "practice-1-58a47.firebaseapp.com",
    projectId: "practice-1-58a47",
    storageBucket: "practice-1-58a47.firebasestorage.app",
    messagingSenderId: "591575325587",
    appId: "1:591575325587:web:3a5eb661a446d696282666",
    measurementId: "G-V35D4K5S6P"
  };



  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  export {auth}