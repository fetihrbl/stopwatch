import React from "react";
import "./Timer.css";
 
function Timer({ time }) {
    const formatTime = (value) => String(value).padStart(2, "0");

    const minutes = formatTime(Math.floor((time / 60000) % 60));
    const seconds = formatTime(Math.floor((time / 1000) % 60));
    const milliseconds = formatTime(Math.floor((time / 10) % 100));

    return(
        <div className="timer">
         <span className="digits">{minutes}:</span>
         <span className="digits">{seconds}:</span>
         <span className="digits mili-sec">{milliseconds}</span>
        </div>
    )
}

export default Timer;