import React, { useState } from "react";
import useSound from "use-sound";

type Task = {
  task: string;
  thisSession: boolean;
  completed: boolean;
};
type Props = {
  task: any;
  id: number;
  tasks: Task[];
  removeTask(id: number): any;
  completeTask(taskIndex: any): any;
};

const TaskCard = (props: Props) => {
  const [playOn] = useSound("/sounds/ding.mp3", {volume: 0.25})
  return (
    <li className="border border-slate-600 p-4 flex mt-2 text-pretty items-center">
      <input
        className="h-4 w-4"
        type="checkbox"
        id={props.id.toString()}
        onChange={() => props.completeTask(props.id)}
        checked={props.task.completed}
        onMouseUp={() => {
          !props.task.completed && playOn()
        }}
      />
      {props.task.completed == true ? (
        <label
          htmlFor={props.id.toString()}
          className="text-muted-foreground line-through p-2"
        >
          {props.task.task}
        </label>
      ) : (
        <label htmlFor={props.id.toString()} className="text-wrap p-2">
          {props.task.task}
        </label>
      )}
    </li>
  );
};

export default TaskCard;
