import React, { useContext } from "react";
import { UserContext } from "../shared/userContext";
import { Button } from "@material-ui/core";
import { auth, provider } from "../shared/firebase";

export default function Login() {
  const [user, setUser] = useContext(UserContext);

  const onSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        setUser(result.user);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png"
          alt="Logo"
        />
        <h1>Sign In to WhatsApp</h1>
        <Button onClick={onSignIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}
