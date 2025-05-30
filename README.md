# React Project Manager

This is a simple project and task management application built with React. It allows users to create, view, and delete projects, as well as add and remove tasks associated with each project.

## Features
- Add new projects
- Select and view project details
- Delete projects
- Add tasks to projects
- Delete tasks from projects
- Responsive and modern UI using Tailwind CSS

## Project Structure
```
src/
  App.jsx                # Main application component
  main.jsx               # Entry point
  index.css              # Global styles (Tailwind)
  components/
    Modal.jsx
    NewProject.jsx
    NewTask.jsx
    NoProjectSelected.jsx
    ProjectDetails.jsx
    ProjectsSidebar.jsx
    Tasks.jsx
    fragments/
      Button.jsx
      Header2.jsx
      Input.jsx
      Paragraph2.jsx
  assets/
    no-projects.png      # Placeholder image
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Built With
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License
This project is licensed under the MIT License.
