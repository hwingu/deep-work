import React from "react";

import { Button } from "../ui/button";
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
  return (
    <li key={props.id} className="border border-slate-600 p-4 flex mt-2 text-pretty">
      <input
        type="checkbox"
        id={props.id.toString()}
        onChange={() => props.completeTask(props.id)}
        checked={props.task.completed}
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
