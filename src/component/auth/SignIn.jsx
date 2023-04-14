import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("userCredentials", userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Log In Your Account
        </h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "none",
          }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "none",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#0077FF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          LogIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
