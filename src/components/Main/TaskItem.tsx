import React, { useState } from "react";
import useSound from "use-sound";
import EditableLabel from "./EditableLabel";

type Task = {
  task: string;
  thisSession: boolean;
  completed: boolean;
};
type Props = {
  task: any;
  id: number;
  removeTask(id: number): any;
  completeTask(taskIndex: any): any;
  changeLabel(id: number, currentText: string): any;
};

const TaskItem = (props: Props) => {
  const [playOn] = useSound("/sounds/ding.mp3", { volume: 0.25 });
  return (
    <li className="border border-slate-600 p-4 flex mt-2 items-center text-left">
      <input
        className="h-4 w-4"
        type="checkbox"
        id={props.id.toString()}
        onChange={() => props.completeTask(props.id)}
        checked={props.task.completed}
        onMouseUp={() => {
          !props.task.completed && playOn();
        }}
      />
      <EditableLabel task={props.task} id={props.id} changeLabel={props.changeLabel}/>
    </li>
  );
};

export default TaskItem;
