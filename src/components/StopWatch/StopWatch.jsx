import React, { useState, useEffect } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused((prev) => !prev);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(true);
        setTime(0);
    };

    return (
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </div>
    );
}

export default StopWatch;
