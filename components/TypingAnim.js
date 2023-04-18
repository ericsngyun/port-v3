'use client'

import { MapPin } from 'lucide-react'
import React, { useEffect } from 'react'
import './TypingAnim.css'

function TypingAnim() {

    useEffect(() => {
      let data = [
        {
          AboutDevTypeText: 
          "> welcome to ericyun.dev :D <br/><br/>" +
          "&nbsp;&nbsp;> linkedin: https://linkedin.com/in/ericsungyun <br/>" +
          "&nbsp;&nbsp;> github: https://github.com/ericsngyun <br/>" +
          "&nbsp;&nbsp;> twitter: https://twitter.com/jozudev <br/>" +
          "<br/>" +
          "> about me:  <br/>" +
          "<br/>" +
          "> hi, my name is eric <br/>" +
          "> i am a full-stack software engineer <br/>"
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
          element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
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
      <span id="AboutDevTypeText" className="typeing glow lg:text-7xl "></span>
      <span class='blinker' className = "text-4xl">&#32;</span>
    </>
  )
}

export default TypingAnim;