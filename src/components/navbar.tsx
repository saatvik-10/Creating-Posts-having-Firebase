import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav">
      <div>
        <div className="nav1">
          <Link className="nav11" to="/">
            Home
          </Link>
          {!user ? (
            <Link className="nav12" to="/login">
              Login
            </Link>
          ) : (
            <Link className="nav12" to="/createpost">
              Create Post
            </Link>
          )}
        </div>

        <div className="nav2">
          <p>{user?.displayName}</p>
          <img
            className="img"
            src={user?.photoURL || ""}
            width="100"
            height="100"
          />
          <button className="btn1" onClick={signUserOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
