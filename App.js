import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "./Firebase.js";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user ==>",user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorcode ==>",errorCode);
    console.log("errorMessage ==>",errorMessage);
    
  });
  })