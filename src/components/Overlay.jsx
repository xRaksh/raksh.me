import '../CSS/overlay.css'
import React from 'react'
import { useRef, useEffect } from "react"

function Overlay() {
  var top = document.getElementsByClassName('pop')
  const off = useRef();


  useEffect(() => {
    function callback() {
      setTimeout(() => {
        console.log("done")
        const setOff = off.current;
        setOff.classList.add('slide_top');
      }, 1000)
      console.log("done")
    }

    off.current?.addEventListener('click', callback);
  }, [])

  return (
    <div className="pop" ref={off}>
      <div className="pop_up">
        <h1>xRaksh</h1>
        <img src="noback.png" alt="me" className="scale-up-center my" />
        <img src="up_arrow.gif" alt="click" className="up" />
      </div>
    </div>

  )
}
export default Overlay
