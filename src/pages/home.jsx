import { TodoList } from '../components/todo-list';
import { TodoForm } from '../components/todo-form';
import { UseTodos } from '../components/hooks/useTodos';

export function Home() {
  // Hooks use propio
  const {todos, title, priority, onCreateTodoApp, onDeleteTodo, setPriority, setTitle} = UseTodos();

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold">Todos</h2>
      <p className="mt-3 text-center">Create a todo</p>

      <TodoForm
        title={title}
        priority={priority}
        onCreateTodoApp={onCreateTodoApp}
        setPriority={setPriority}
        setTitle={setTitle}
        onDeleteTodo={onDeleteTodo}
      />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}
