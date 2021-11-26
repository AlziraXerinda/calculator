import React from "react";
import calculatorLogo from "./assets/imgs/calculatorLogo.jpg";

const Home = () => {
  return (
    <div>
      <nav className="bg-primary navbar" role="navigation" aria-label="main navigation" height="70px" >
        <div className="navbar-brand bg-primary">
          <a className="navbar-item" href="https://bulma.io">
            <img src={calculatorLogo} alt="Calculator" width={50} height={50} />
          </a>

        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Home;
