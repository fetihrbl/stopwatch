import React from "react";
import "./ControlButtons.css";

function ControlButtons(props) {

    const StartButton = (
        <button className="btn btn-start" onClick={props.handleStart}>
            Start
        </button>
    );

    const ActiveButtons = (
        <div className="btn-grp">
            <button className="btn btn-reset" onClick={props.handleReset}>
                Reset
            </button>
            <button
                className={`btn btn-pause ${props.isPaused ? "btn-resume" : ""}`}
                onClick={props.handlePauseResume}
            >
                {props.isPaused ? "Resume" : "Pause"}
            </button>

        </div>
    )

    return (
        <div className="control-buttons">
            {props.active ? ActiveButtons : StartButton}
        </div>
    )
}

export default ControlButtons;