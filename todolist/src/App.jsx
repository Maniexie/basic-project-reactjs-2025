import React, { useState } from "react";
import { Cog8ToothIcon, TrashIcon } from "@heroicons/react/24/solid";
import ModalFormUpdateTask from "./Components/ModalFormUpdateTask";

export default function App() {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([
    {
      id: 1,
      task: "Belajar React",
    },
    {
      id: 2,
      task: "makan sambil tidur di rumahmakan sambil tidur di rumahmakan sambil tidur di rumah",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setNewTask([...newTask, { id: newTask.length + 1, task: task }]);
      setTask("");
    }
  };

  const handleUpdateTask = (id) => {
    const taskToUpdate = newTask.find((task) => task.id === id);
    setTask(taskToUpdate);
    // setNewTask([...newTask, { id: newTask.length + 1, task: task }]);
  };

  // const handleDeleteTask = (id) => {
  //   const deleteTask =
  // }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border p-10">
        <h1 className="text-center mb-10 text-2xl">
          Silahkan Buat Tugas Harian Anda
        </h1>
        <div className="px-10">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="todo">
              <span>Task : </span>
              <input
                type="text"
                id="todo"
                className="border rounded-md w-full"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
            </label>
            <div className=" flex justify-center w-full bg-blue-400 mt-2 p-2 text-white hover:bg-blue-800 transition duration-200 rounded-md">
              <button type="submit" className="w-full font-semibold">
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <div className="px-10 border mt-5 rounded-lg bg-white shadow-md">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Current Tasks
          </h2>
          {newTask.length > 0 ? (
            <ul className="space-y-4 mb-5">
              {newTask.map((item, index) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                >
                  <div className="flex items-center space-x-2  text-wrap hover:text-balance">
                    <span className="text-lg text-gray-700">{index + 1}.</span>
                    <span className="text-lg text-gray-800 break-words md:max-w-[20ch] sm:max-w-[30ch]">
                      {item.task}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      className="hover:bg-slate-300 hover:py-1 hover:px-0 hover:rounded-md transition duration-150"
                      onClick={() => alert(`Edit task: ${item.task}`)} // Placeholder untuk edit action
                    >
                      <Cog8ToothIcon className="size-6 text-blue-500" />
                    </button>
                    <button
                      className="hover:bg-slate-300 hover:py-1 hover:px-0 hover:rounded-md transition duration-150"
                      // onClick={() => alert(`Delete task: ${item.task}`)} // Placeholder untuk delete action
                      onClick={handleUpdateTask}
                    >
                      <TrashIcon className="size-6 text-red-500" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
}
