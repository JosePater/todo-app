export function TodoCard({ todo, onDeleteTodo }) {
  const colorBorder =
    todo.priority == 'high'
      ? 'border-red-500'
      : todo.priority == 'medium'
      ? 'border-orange-500'
      : 'border-indigo-500';

  return (
    <div
      className={`mx-auto w-full max-w-md rounded border ${colorBorder} px-3 py-4`}
    >
      <div className="flex justify-between">
        <p>{todo.title}</p>
        <button onClick={() => onDeleteTodo(todo.title)}>❌</button>
      </div>
    </div>
  );
}
