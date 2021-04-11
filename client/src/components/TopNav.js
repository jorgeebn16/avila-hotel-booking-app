import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/")
  }

  return(
    <div className="nav bg-light d-flex justify-content-between">
      <Link className="nav-link" to="/">
        Home
      </Link>

      {auth !== null && <a className="nav-link pointer" onClick={logout}>Logout</a>}

      {auth === null && (
        <>
          <Link className="nav-link pointer" to="/login">
            Login
          </Link>
          <Link className="nav-link pointer" to="/registration">
            Registration
          </Link>
        </>
      )}
    </div>
  );
}

export default TopNav;