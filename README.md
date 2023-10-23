# Todo-app [React JS]

## Proyecto Básico

```
npm install react-router-dom
```

## Tailwindcss

- Instalación de Tailwindcss:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configuración:

```javascript
[tailwind.config.js];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Añadir directivas Tailwindcss:

```css
[index.css]

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Recursos tailwindcss

- Tailwindcss Play

#

# Funcionalidades de Todo-App

## Almacenamiento: localStorage

- Guardar tareas categorizadas por prioridad
- Eliminar tareas (localStorage)
- No guardar tareas repetidas
- No guardar tareas en blanco
