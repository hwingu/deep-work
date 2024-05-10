"use client";
import { Button } from "@/components/ui/button";
import Tasks from "@/components/Main/Tasks";
import Settings from "@/components/Main/Settings";
import { useState } from "react";
import NavBar from "@/components/Main/NavBar";
import useCountdown from "@/hooks/useCountdown";

export default function Home() {
  const [userTime, setUserTime] = useState(90 * 60);
  const [
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
  ] = useCountdown(userTime);
  const isSingleDigit = (number: number) => {
    let numberAsString = number.toString();
    if (numberAsString.length == 1) return true;
    else return false;
  };
  return (
    <main className="px-5 bg-background">
      <NavBar />
      <div>
        <div className="text-center p-5 text-4xl scroll-m-20">
          {mode === "focus" ? (
            <h1 className="text-xl font-semibold">FOCUS</h1>
          ) : (
            <h1 className="text-xl font-semibold">DEEP WORK</h1>
          )}
          <div className="pt-6 tracking-widest">
            {isSingleDigit(minutes) == true ? `0${minutes}` : minutes}:
            {isSingleDigit(seconds) === true ? `0${seconds}` : seconds}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <Settings
            userTime={userTime}
            setUserTime={setUserTime}
            setFocusMode={setFocusMode}
            focusMode={focusMode}
          />
          {started == false ? (
            <Button onClick={startTimer}>Start</Button>
          ) : (
            <Button onClick={startTimer}>Pause</Button>
          )}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              onClick={restartTimer}
              className="transition fill-current hover:cursor-pointer hover:fill-primary hover:animate-spin"
            >
              <path d="M 25 2 A 1.0001 1.0001 0 1 0 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 18.307314 7.130711 12.364806 12 8.5195312 L 12 15 A 1.0001 1.0001 0 1 0 14 15 L 14 6.5507812 L 14 5 L 4 5 A 1.0001 1.0001 0 1 0 4 7 L 10.699219 7 C 5.4020866 11.214814 2 17.712204 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z"></path>
            </svg>
          </button>
        </div>
      </div>
      <Tasks />
    </main>
  );
}
