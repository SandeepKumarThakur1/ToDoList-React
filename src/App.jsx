import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const onSetTask = (e) => setTask(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTaskList([...taskList, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  const clearAll = () => {
    setTaskList([]);
  };

  return (
    <section className="p-4 sm:p-6 md:p-10 max-w-2xl mx-auto">
      <h1 className="font-bold text-3xl sm:text-4xl mb-6 text-center">
        📝 Todo List App
      </h1>

      <form
        onSubmit={addTask}
        className="flex flex-col sm:flex-row items-center gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Enter Your Task Here..."
          className="px-4 py-2 rounded-full border placeholder:italic w-full text-base"
          value={task}
          onChange={onSetTask}
        />
        <button
          disabled={!task.trim()}
          className={`px-6 py-2 rounded-full text-white text-sm sm:text-base whitespace-nowrap ${
            task.trim()
              ? "bg-green-800 hover:bg-green-700"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Add Task
        </button>
      </form>

      {taskList.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks available. Add some! 😄
        </p>
      ) : (
        <ul className="space-y-3">
          {taskList.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-cyan-900  px-4 py-2 rounded-lg shadow-sm"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(index)}
                className="w-5 h-5"
              />
              <span
                className={`flex-1 text-base ${
                  item.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {item.text}
              </span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-600 text-xl hover:scale-110 transition-transform"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      {taskList.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm sm:text-base"
          >
            Clear All
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
