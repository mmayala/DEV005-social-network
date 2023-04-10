import { createUserWithEmailAndPassword } from "firebase/auth";
//import { async } from 'regenerator-runtime';
import { auth } from "./firebase.js";

export function signin() {
  const signinForm = document.querySelector("#signin_form");
  // console.log(signinForm);

  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signinForm.signin_email.value;
    const password = signinForm.signin_password.value;
    console.log(email, password);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
    } catch (error) {
      console.log(error);
    }
  });
}
