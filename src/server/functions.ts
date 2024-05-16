type Task = {
  task: string;
  thisSession: boolean;
  completed: boolean;
};

export const handleAdd = (
  currentTask: string,
  thisSession: boolean,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  setCurrentTask: React.Dispatch<React.SetStateAction<string>>
) => {
  const newTask: Task = {
    task: currentTask,
    thisSession: thisSession,
    completed: false,
  };

  const updatedTasks = [...tasks, newTask];

  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  setCurrentTask("");
};

