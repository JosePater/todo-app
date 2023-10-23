import { useEffect, useState } from 'react';

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
    alert(`The task:  ${title}, deleted!`);
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
          return alert(`The task:  ${task.title}, is exist!`);
        }

        // ------ NO EXISTE TAREA INGRESADA ------

        // Añadir otra nueva tarea al localStrage
        currentTodos.push(task);
        setTodos([...todos, task]);
        return localStorage.setItem('todos', JSON.stringify(currentTodos));
      }
      setTodos([...todos, task]);
      // Añadir la primera tarea al localStorage
      localStorage.setItem('todos', JSON.stringify([task]));
    } else {
      alert('Title no valide');
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
