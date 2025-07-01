
const page = async () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">📝 To-Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 rounded-l-md flex-1"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <span>{t}</span>
            <button
              onClick={() => removeTask(i)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
