import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

// Hooks use propio
export function UseTodos() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Agregar valores del localStorage al todos
    const todos = localStorage.getItem('todos'); // string
    if (todos) {
      // Si hay valores -> agregar otros
      setTodos(JSON.parse(todos)); // JSON
    }
  }, []);

  function onDeleteTodo(title) {
    const todosLeft = todos.filter((task) => task.title !== title); // Borrar la tarea seleccionada
    setTodos(todosLeft); // Actualiza el listado en la variable de estado
    localStorage.setItem('todos', JSON.stringify(todosLeft)); // Actualiza el listado en localStorage
    toast.success(`The task:  ${title}, deleted!`);
  }

  function onCreateTodoApp(e) {
    e.preventDefault();
    const task = {
      title,
      priority,
    };

    // Verificar texto de entrada
    if (title.length > 5) {
      // Agregar tareas al localStorage
      let currentTodos = localStorage.getItem('todos');
      if (currentTodos) {
        // Convertirlo a su formato original
        currentTodos = JSON.parse(currentTodos);
        // Comprobar si ya existe el título ingresado
        const alreadyExists = currentTodos.find(
          (item) => item.title === task.title
        );
        if (alreadyExists) {
          return toast.error(`The task:  ${task.title}, it already exists`);
        }

        // ------ NO EXISTE TAREA INGRESADA ------

        // Añadir otra nueva tarea al localStrage
        toast.success('Saved task');
        currentTodos.push(task);
        setTodos([...todos, task]);
        return localStorage.setItem('todos', JSON.stringify(currentTodos));
      }
      setTodos([...todos, task]);
      // Añadir la primera tarea al localStorage
      toast.success('Your first saved task');
      localStorage.setItem('todos', JSON.stringify([task]));
    } else {
      toast.error('Title no valide');
    }
  }

  return {
    todos,
    title,
    priority,
    setTitle,
    setPriority,
    onCreateTodoApp,
    onDeleteTodo,
  };
}
