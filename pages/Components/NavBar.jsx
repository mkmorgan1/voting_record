import React from "react";

export default function NavBar({ pageProps }) {
  const onClickEvent = (e) => {
    console.log(e);
  };
  return (
    <>
      <h1>Voting Record</h1>
      <ul className="nav navbar-light border-bottom">
        <li className="nav-item" onClick={onClickEvent}>
          <a className="nav-link" id="home" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item" onClick={onClickEvent}>
          <a className="nav-link" href="/house" id="house">
            The House
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/senate" id="senate">
            The Senate
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about" id="about">
            About
          </a>
        </li>
      </ul>
    </>
  );
}
