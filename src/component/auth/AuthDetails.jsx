import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {authUser ? (
        <>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >{`Login In as ${authUser.email}`}</p>
          <button
            style={{
              backgroundColor: "#0077ff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <p
          style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Please Sign In
        </p>
      )}
    </div>
  );
};

export default AuthDetails;
