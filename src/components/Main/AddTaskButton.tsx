"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";


type Props = {
  handleAdd: () => void;
  handleUserInput: any;
  currentTask: string;
  thisSession: any;
  setThisSession: any;
};

const AddTaskButton = (props: Props) => {
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 && props.currentTask.trim() !== "") {
      props.handleAdd();
      props.handleUserInput({ target: { value: "" } });
    }
  };
  return (
    <>
      <div className="flex flex-col p-5 rounded-xl border border-slate-600 mb-2">
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            className="fill-primary"
          >
            <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
          </svg>
          <input
            type="text"
            className="bg-transparent w-full pl-2 border-b"
            placeholder="Add a task"
            value={props.currentTask}
            onChange={props.handleUserInput}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="flex pt-10 justify-end items-center ">
          
            {props.currentTask == "" ? (
              <Button onClick={props.handleAdd} disabled>
                Add Task
              </Button>
            ) : (
              <Button onClick={props.handleAdd} type="submit">
                Add Task
              </Button>
            )}
         
        </div>
      </div>
    </>
  );
};

export default AddTaskButton;
