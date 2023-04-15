'use client'

import React, { useEffect } from 'react'
import './TypingAnim.css'

function TypingAnim() {

    useEffect(() => {
      let data = [
        {
          AboutDevTypeText: 
          "<span>welcome to eric_yun_terminal<br/><br/>eric loves to code and make cool stuff</span><br/><br/><br/><span>he enjoys working with<br/>"
        }
      ];
      
      let allElements = document.getElementsByClassName("typeing");
      for (let j = 0; j < allElements.length; j++) {
        let currentElementId = allElements[j].id;
        let currentElementIdContent = data[0][currentElementId];
        let element = document.getElementById(currentElementId);
        let devTypeText = currentElementIdContent;
      
        // type code
        let i = 0, isTag, text;
        (function type() {
          text = devTypeText.slice(0, ++i);
          if (text === devTypeText) return;
          element.innerHTML = text + `<span class='blinker'></span>`;
          let char = text.slice(-1);
          if (char === "<") isTag = true;
          if (char === ">") isTag = false;
          if (isTag) return type();
          setTimeout(type, 30);
        })();
      }
    })

  return (
    <>
      <span id="AboutDevTypeText" className="typeing glow text-4xl"></span>
      <span class='blinker' className = "text-4xl"></span>
    </>
  )
}

export default TypingAnim