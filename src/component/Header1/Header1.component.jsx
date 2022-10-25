import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Header1.styles.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/user/user.selectors";
import { signOutStart } from "../../Redux/user/user.actions";

const Header1 = ({ currentUser, signOutStart }) => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setOpen(!open);

    setToggle(!toggle);
    console.log(toggle);
    setFade(!fade);
  };
  return (
    <div className="navContainer">
      <div className="headerContainer">
        <nav>
          <div
            className={`hamburger ${toggle ? "toggle" : null}`}
            onClick={handleClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <ul className={`nav-links ${open ? "open" : null}`}>
            <li className={`${fade ? "fade" : ""}`}>
              <Link
                className="liLink"
                to={"/"}
                onClick={() => {
                  setOpen(!open);
                  setToggle(!toggle);
                  setFade(!fade);
                }}
              >
                خانه
              </Link>
            </li>

            {currentUser ? (
              currentUser.userAuth ? (
                <li className={`${fade ? "fade" : ""}`}>
                  <Link
                    className="liLink"
                    to={"/products"}
                    onClick={() => {
                      setOpen(!open);
                      setToggle(!toggle);
                      setFade(!fade);
                    }}
                  >
                    محصولات
                  </Link>
                </li>
              ) : null
            ) : null}

            <li className={`${fade ? "fade" : ""}`}>
              {currentUser ? (
                <Link className="liLink" onClick={signOutStart}>
                  <Redirect to="/" />
                  خروج
                </Link>
              ) : (
                <Link className="liLink" to={"/signin"}>
                  ورود
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProp = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProp)(Header1);
