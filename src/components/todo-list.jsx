import { TodoCard } from './todo-card';

export function TodoList({ todos, onDeleteTodo }) {
  return (
    <div className="mt-8 px-3">
      <p className="mb-3 text-center">Todo List</p>
      <div className="flex flex-col gap-4">
        {todos.map((todo, i) => {
          return <TodoCard key={i} todo={todo} onDeleteTodo={onDeleteTodo} />;
        })}
      </div>
    </div>
  );
}
