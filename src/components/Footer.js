import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import Contact from "./Contact"
import { Link } from "gatsby"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

const desktopButton = (
  <button
    className="popupWindowLinkButton"
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.location.href = "https://github.com/khalil-ghali"; // Replace with the desired URL
    }}
  >
    My Portfolio
  </button>
);


const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" ,cursor: "pointer"}}
    >
      <div style={{ margin: "auto" ,cursor: "pointer"}}>
        <Link to="/">Home</Link> {" | "}
        {checkScreenWidthMobile() ? (
          <a href="https://github.com/khalil-ghali">My Portfolio</a>
        
        ) : (
          desktopButton
        )}
        {" | "}
        
        <a
        
          href="https://github.com/khalil-ghali"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        
      </div>
      
      <span
        style={{
          cursor: "pointer",
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        © {new Date().getFullYear()} Mohammed-Khalil Ghali {" | "} Your Favorite Generative AI Portal
      </span>
    </footer>
  )
}

export default Footer
