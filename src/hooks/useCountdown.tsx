import React from "react";
import { useState, useEffect } from "react";

type Props = {
  initialTime: number;
  function: () => void;
};

const useCountdown = (initialTime: number, callback?: () => void) => {
  const FOCUS_TIME = 30;
  const [deepWorkTime, setTime] = useState(initialTime);
  const [focusTime, setFocusTime] = useState(FOCUS_TIME);
  const [mode, setMode] = useState<string>("");
  const [focusMode, setFocusMode] = useState(false)
  const [started, setStarted] = useState(false);
  const [minutes, setMinutes] = useState(Math.floor(initialTime / 60));
  const [seconds, setSeconds] = useState(initialTime % 60);
  let interval: any = null;
  const startTimer = () => {
    if (focusMode == true && focusTime > 0 && focusMode == true) {
      setMode("focus")
      setStarted(!started);
    } else {
      setMode("deepwork");
      setStarted(!started);
    }
  };
  const restartTimer = () => {
    setStarted(false);
    setMinutes(Math.floor(initialTime / 60));
    setSeconds(initialTime % 60);
    setTime(initialTime);
    setFocusTime(30);
    clearInterval(interval);
  };
  const playAudio = () => {
    let audio = new Audio(
      "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3"
    );
    audio.play();
  };
  useEffect(() => {
    if (started && mode === "deepwork") {
      interval = setInterval(() => {
        setTime(deepWorkTime - 1);
        setMinutes(Math.floor(deepWorkTime / 60));
        setSeconds(deepWorkTime % 60);
      }, 1000);
    } else if (started && mode === "focus") {
      interval = setInterval(() => {
        setFocusTime(focusTime - 1);
        setMinutes(Math.floor(focusTime / 60));
        setSeconds(focusTime % 60);
        if (focusTime === 0) {
          setMode("deepwork");
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (deepWorkTime == -1) {
      clearInterval(interval);
      playAudio();
      setFocusTime(30)
      setTime(initialTime)
      setStarted(!started)
    }
    return () => {
      clearInterval(interval);
    };
  }, [deepWorkTime, started, focusTime]);

  return [
    mode,
    setMode,
    setFocusMode,
    focusMode,
    deepWorkTime,
    focusTime,
    startTimer,
    started,
    restartTimer,
    minutes,
    seconds,
  ] as const;
};

export default useCountdown;
