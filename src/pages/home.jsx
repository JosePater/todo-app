import { useState } from 'react';

export function Home() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [todos, setTodos] = useState([]);

  function onCreateTodoApp(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title,
        priority,
      },
    ]);
  }

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold">Todos</h2>
      <p className="mt-3 text-center">Create a todo</p>
      <form
        className="mx-auto my-8 max-w-xl border-2 px-6 py-8 shadow-md"
        action=""
        onSubmit={onCreateTodoApp}
      >
        {/* Advertencia */}
        {title.length < 5 && title.length > 0 && (
          <p className="text-red-600 absolute m-10 pl-5">
            Title length should be grater that 5
          </p>
        )}

        <label htmlFor="title">Todo Title</label>
        <input
          className="mt-2 w-full rounded border border-black px-2 py-2"
          name="title"
          type="text"
          title={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="mt-4 inline-block" htmlFor="">
          Priority
        </label>
        <select
          className="mt-2 block border border-black px-4 py-2"
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option className="px-2" value="low">
            Low
          </option>
          <option className="px-2" value="medium">
            Medium
          </option>
          <option className="px-2" value="high">
            High
          </option>
        </select>
        <input
          className="mt-6 w-full rounded bg-indigo-600 py-3 text-white cursor-pointer"
          type="submit"
          value="Create"
        />
      </form>

      <div className="mt-8 px-3">
        <p className="mb-3 text-center">Todo List</p>
        <div className="flex flex-col gap-4">
          {todos.map((todo, i) => {
            const colorBorder =
              todo.priority == 'high'
                ? 'red'
                : todo.priority == 'medium'
                ? 'orange'
                : 'indigo';
            return (
              <div
                key={i}
                className={`mx-auto w-full max-w-md rounded border border-${colorBorder}-500 px-3 py-4`}
              >
                <p>{todo.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
