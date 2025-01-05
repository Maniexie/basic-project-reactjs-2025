import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ModalFormUpdateTask({
  open,
  setOpen,
  taskToUpdate,
  onUpdateTask,
}) {
  const [updatedTask, setUpdatedTask] = useState(taskToUpdate.task);

  const handleUpdate = () => {
    if (updatedTask.trim() !== "") {
      onUpdateTask(taskToUpdate.id, updatedTask); // Memanggil fungsi update yang diberikan sebagai prop
      setOpen(false); // Menutup modal setelah update
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <Dialog.Backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="relative bg-white rounded-lg shadow-xl sm:w-full sm:max-w-lg">
          <div className="bg-white p-6">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Update Task
            </DialogTitle>
            <div className="mt-2">
              <label
                htmlFor="updated-task"
                className="block text-sm font-medium text-gray-700"
              >
                Task:
              </label>
              <input
                type="text"
                id="updated-task"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={handleUpdate}
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
