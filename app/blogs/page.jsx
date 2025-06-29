'use client';

const page = async () => {
  const res = await fetch('http://localhost:3000/api/todos');
  const data = await res.json();
  return (
    <div className="pt-20 max-w-6xl mx-auto px-4">
      <h1>{todo.todo.todos.length}</h1>
    </div>
  );
};

export default page;
