# Backend Todo-App -> Nexplore exercise

## Description

This is a repository of the UI for Todo Application for Nexplore.
This project is built with Vite, React and TypeScript.

![Todo App](/public/todo_app_screenshot.PNG)

## Installation

1. Clone this repository in your local PC:

```bash
git clone https://github.com/julamifra/todo-app-front.git
```

2. In the project directory, install dependencies:

```bash
npm install
```

3. Add an .env file in the root level (copy the keys as it is in .env.example):

```bash
VITE_TODO_APP_API_URL=http://localhost:3000
```

## Run the app

Run the application in your local:

```bash
npm run dev
```

Prepare the application for production:

```bash
npm run build
```

Lint project:

```bash
npm run lint
```

## Testing

Some components and hooks have been tested.
Ideally, more tests would be needed.

Run tests

```bash
npm run test
```

## Technologies and libraries used

- Vite tool to build the application
- React for building the UI
- Vitest and happy-dom for testing

## Project structure

- /assets
- /components
- /context
- /hooks
- /services
- /tests
- /types
- /utils
