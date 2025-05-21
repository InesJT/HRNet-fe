# HRNet Frontend

This project is a React-based frontend application for HRNet, built with [Vite](https://vitejs.dev/) for fast development and modern tooling. It allows users to create and list employees, featuring form validation, persistent Redux state, and a responsive UI.

## Features

- Create new employees with validated forms
- List and search current employees in a data table
- State management with Redux Toolkit and redux-persist
- Routing with React Router
- Modern UI with React, react-select, react-datepicker, and it-modal
- ESLint for code quality

## Project Structure

├── public/ ├── src/ │ ├── assets/ │ ├── components/ │ ├── css/ │ ├── pages/ │ ├── redux/ │ └── utils/ ├── .vscode/ ├── index.html ├── package.json ├── vite.config.js └── ...

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd HRNet-fe
     npm install    

 ### Running the App Start the development server:

    npm run dev    

The app will be available at http://localhost:5173 by default.

### Building for Production

    npm run build

### Run production build locally

    npm run preview

### Linting

    npm run lint

## Main Dependencies

- **React**
- **Redux Toolkit**
- **redux-persist**
- **react-data-table-component**
- **react-hook-form**
- **zod**
- **react-select**
- **react-datepicker**
- **it-modal**
- **Vite**

## Folder Overview

- `src/pages/` — Application pages (Home, Current Employees, Error)
- `src/components/` — Reusable UI components
- `src/redux/` — Redux store and slices
- `src/utils/` — Utility data and functions
- `src/css/` — Stylesheets

## License

This project is licensed under the MIT License.

