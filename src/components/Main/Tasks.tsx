"use client";
import React, { useEffect, useState } from "react";
import AddTaskButton from "./AddTaskButton";
import TaskCard from "./TaskCard";
import { Button } from "../ui/button";
import { toast } from "sonner";
type Props = {};

type Task = {
  task: string;
  thisSession: boolean;
  completed: boolean;
};

const Tasks = (props: Props) => {
  const [currentTask, setCurrentTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [thisSession, setThisSession] = useState(true);

  const handleAdd = () => {
    const newTask = {
      task: currentTask,
      thisSession: thisSession,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setCurrentTask("");
  };

  const handleUserInput = (event: any) => {
    setCurrentTask(event.target.value);
  };

  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((task, index) => index !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const checkAllComplete = () => {
    const sessionTasks = tasks.filter((task) => task.thisSession === true);
    return sessionTasks.every((task) => task.completed === true);
  };
  const completeTask = (taskIndex: number) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const markSessionAsDone = () => {
    const deleteTask = tasks.filter((task, index) => {
     return !(task.completed && task.thisSession);
    });

    const updatedTasks = deleteTask.map((task, index) => {
      if (task.thisSession == false) {
        return { ...task, thisSession: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  useEffect(() => {
    const hasSessionTasks = tasks.some((task) => task.thisSession === true);
    if (hasSessionTasks && checkAllComplete() === true) {
      toast("All tasks complete!", {
        action: {
          label: "Mark session as complete",
          onClick: () => markSessionAsDone(),
        },
      });
    }
  }, [tasks]);
  useEffect(() => {
    // @ts-ignore
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  return (
    <div className="pt-6 text-center">
      <h1 className="text-2xl pb-2 border-b border-primary">Tasks</h1>
      <div className="flex flex-col pt-4 content-center max-w-5xl m-auto">
        <AddTaskButton
          handleAdd={handleAdd}
          handleUserInput={handleUserInput}
          currentTask={currentTask}
          thisSession={thisSession}
          setThisSession={setThisSession}
        />
        <div className="flex justify-between">
          <div className="flex gap-x-2">
            {thisSession == true ? (
              <Button
                onClick={() => setThisSession(true)}
                variant={"secondary"}
              >
                This Session
              </Button>
            ) : (
              <Button onClick={() => setThisSession(true)}>This Session</Button>
            )}
            {thisSession == false ? (
              <Button
                onClick={() => setThisSession(false)}
                variant={"secondary"}
              >
                Next Session
              </Button>
            ) : (
              <Button onClick={() => setThisSession(false)}>
                Next Session
              </Button>
            )}
          </div>
          <Button onClick={markSessionAsDone}>Mark session as done</Button>
        </div>
        {thisSession == true ? (
          <ul className="flex flex-col">
            {tasks.map(
              (task, id) =>
                task.thisSession === true && (
                  <TaskCard key={id}
                    task={task}
                    id={id}
                    removeTask={removeTask}
                    tasks={tasks}
                    completeTask={completeTask}
                  />
                )
            )}
          </ul>
        ) : (
          <ul className="flex flex-col">
            {tasks.map(
              (task, id) =>
                task.thisSession === false && (
                  <TaskCard
                    task={task}
                    id={id}
                    removeTask={removeTask}
                    tasks={tasks}
                    completeTask={completeTask}
                  />
                )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tasks;
