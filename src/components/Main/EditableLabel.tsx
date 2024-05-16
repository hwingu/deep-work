"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

type Task = {
  task: string;
  thisSession: boolean;
  completed: boolean;
};

type Props = {
  task: Task;
  id: number;
  changeLabel(id: number, currentText: string): any;
};

const EditableLabel = ({ task, id, changeLabel }: Props) => {
  const [edit, setEdit] = useState(false);
  const [currentText, setCurrentText] = useState("");

  return (
    <>
      {edit === false ? (
        task.completed === true ? (
          <p
            onDoubleClickCapture={() => {
              setEdit(true);
              setCurrentText(task.task);
            }}
            className="text-muted-foreground line-through p-2"
          >
            {task.task}
          </p>
        ) : (
          <p
            onDoubleClick={() => {
              setEdit(true);
              setCurrentText(task.task);
            }}
            className="text-pretty p-2"
          >
            {task.task}
          </p>
        )
      ) : (
        <div className="flex gap-x-2">
          <input
            onChange={(e) => setCurrentText(e.target.value)}
            className="ml-2 bg-transparent"
            value={currentText}
          />
          {currentText === "" ? (
            <Button
              onClick={() => {
                changeLabel(id, currentText);
                setEdit(false);
              }}
              disabled
            >
              <Check />
            </Button>
          ) : (
            <Button
              onClick={() => {
                changeLabel(id, currentText);
                setEdit(false);
              }}
            >
              <Check />
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default EditableLabel;
