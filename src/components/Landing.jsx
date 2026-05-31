import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section id="landing">
      <div className="header__container">
        <div className="header__description">
          <h1> America's Most awarded online library platform</h1>
          <h2>Discover, Read, and Enjoy</h2>
          <Link to="/books">
            <button className="btn">Browse Books</button>
          </Link>
        </div>
        <figure className="header__image--wrapper">
          <img src={UndrawBooks} alt="Books" />
        </figure>
      </div>
    </section>
  );
}

export default Landing;
