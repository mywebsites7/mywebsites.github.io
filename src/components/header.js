import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

import "react-toggle/style.css"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  );

  const typeStrings = [
    "Mohammed-Khalil Ghali",
    "Data Science Enthusiast",
    "Generative AI Apps Creator",
    "Welcome to my Generative AI Projects Portal"
  ];

  let currentIndex = 0;

  const typeNextString = () => {
    const typewriterContainer = document.querySelector("#typewriter-container");
    const currentString = typeStrings[currentIndex];
    const currentLength = currentString.length;

    let i = 0;

    const typeCharacter = () => {
      if (i <= currentLength) {
        typewriterContainer.textContent = currentString.substr(0, i);
        i++;
        setTimeout(typeCharacter, 100); // Delay between characters
      } else {
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % typeStrings.length;
          typeNextString();
        }, 2500); // Delay before typing the next string
      }
    };

    typeCharacter();
  };

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
      typeNextString();
    }
  }, [isLoaded]);

  return (
    <header>
      <div style={{ display: "inline-flex" }}>
        <h1>{">"}</h1>
        <h1 id="typewriter-container">
          {isLoaded ? "Welcome to Generative AI Projects Portal" : ""}
        </h1>
      </div>
    </header>
  );
};


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
