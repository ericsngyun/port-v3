'use client'

import { MapPin } from 'lucide-react'
import React, { useEffect } from 'react'
import './TypingAnim.css'

function TypingAnim({ text }) {

    useEffect(() => {
      let data = [
        {
          AboutDevTypeText: 
          text
          // "> hi i'm eric &#128075;"
          // "connect with me: <br/><br/>" +
          // "&nbsp;&nbsp;> linkedin: https://linkedin.com/in/ericsungyun <br/>" +
          // "&nbsp;&nbsp;> github: https://github.com/ericsngyun <br/>" +
          // "&nbsp;&nbsp;> twitter: https://twitter.com/jozudev <br/>" 
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
      <span id="AboutDevTypeText" className="typeing glow lg:text-7xl md:text-5xl sm:text-4xl bg-transparent h-max max-w-[70%] grid place-items center"></span>
    </>
  )
}

export default TypingAnim;