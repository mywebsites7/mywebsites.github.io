import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"
import Header from "../components/header"
import { useState, useEffect } from 'react';

// Import your CSS file for styling


const IndexPage = () => {
  const handleCommand = (input) => {
    const args = input.split(" ");
    const command = args[0].toLowerCase();
  
    if (command === "cd") {
      const targetPage = args[1].toLowerCase();
      if (targetPage === "about" /* Add more valid page names */) {
        window.location.href ='/Portfolios /Khalil´s Portfolio';}
      else if(targetPage === "contact" /* Add more valid page names */) {
        window.location.href ='http://linkedin.com/in/mohammed-khalil-ghali-11305119b/';}
      else if(targetPage === "pdfchat" /* Add more valid page names */) {
          window.location.href ='/Portfolios /Khalil´s Portfolio';}
      else if(targetPage === "websitechat" /* Add more valid page names */) {
            window.location.href ='/Portfolios /Khalil´s Portfolio';}
      else if(targetPage === "youtubechat" /* Add more valid page names */) {
              window.location.href ='/Portfolios /Khalil´s Portfolio';}
      else if(targetPage === "csvchat" /* Add more valid page names */) {
                window.location.href ='/Portfolios /Khalil´s Portfolio';}
      else if(targetPage === "portfolio" /* Add more valid page names */) {
                  window.location.href ='/Portfolios /Khalil´s Portfolio';}
       else {
        // Display an error message directly
        console.error(`Invalid directory: ${targetPage}`);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Invalid directory: ${targetPage}`;
        errorMessage.className = "error-message";
        document.querySelector(".command-line").appendChild(errorMessage);
        setTimeout(() => {
          errorMessage.remove();
        }, 2000);
      }
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const input = event.target.value;
      handleCommand(input);
    }
  };
  const [typewriterText, setTypewriterText] = useState('');
  const initialText = '(bash)root@mac-Mohammed-Khalil:~$';

  useEffect(() => {
    let currentIndex = 0;
    let isPaused = false;

    const interval = setInterval(() => {
      if (isPaused) {
        return;
      }

      if (currentIndex < initialText.length) {
        setTypewriterText(initialText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        isPaused = true;
        setTimeout(() => {
          currentIndex = 0;
          isPaused = false;
        }, 3000); // Pause for 3 seconds
      }
    }, 150); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Seo title="Terminal Portfolio" />
      <Layout>
        <Header />
        <div className="terminal-container">
        <div className="LsDisplayWindoz">
      <div className="LsDisplayTaskbar" >
        <span>{typewriterText}</span>
        

      </div>
      <div className="terminal">
            <div className="help">
              <p>{">>"}Alternatively! Type your command to access one of the directories</p>
              
              <p>{">>"}Type 'cd' followed by the directory name: </p>
              
              
              <ul>
              <li>Section-{">"}Corresponding command</li>
                <li>/About-{">"}about</li>
                <li>/Contact Me-{">"}contact</li>
                <li>/Chat With Any PDF-{">"}pdfchat</li>
                <li>/Chat With Any Website-{">"}websitechat</li>
                <li>/Chat With Any CSV-{">"}csvchat</li>
                <li>/Chat With Any Youtube Video-{">"}youtubechat</li>
                <li>/My Portfolio-{">"}portfolio</li>
                <p>{">>"}example: cd about </p>
                {/* Add more possible directions */}
              </ul>
            </div>
            <div className="command-line">
              <span className="prompt">~$</span>
              <input
                type="text"
                placeholder="Type command..."
                onKeyDown={handleKeyDown}
                className="command-input"
              />
            </div>
          </div>
      </div>
        <div className="container">
          
          <LsDisplay text="" delay="natural"/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
