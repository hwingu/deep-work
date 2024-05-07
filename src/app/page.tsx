"use client";
import { Button } from "@/components/ui/button";
import useCountdown from "@/hooks/useCountdown";
import Tasks from "@/components/Main/Tasks";
import Settings from "@/components/Main/Settings";
import { useState } from "react";
import NavBar from "@/components/Main/NavBar";
import { ListRestartIcon } from "lucide-react";

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
          <ListRestartIcon onClick={restartTimer} />
        </div>
      </div>
      <Tasks />
    </main>
  );
}
