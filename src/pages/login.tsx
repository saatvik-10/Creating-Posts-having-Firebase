import { auth, provider } from "../config/firebase";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className="sign">
      <h2>
        <p> Sign in with Google to continue </p>
      </h2>
      <button className="btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};
