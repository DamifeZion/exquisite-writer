# The Exquisite Writers

This project is a React application powered by TypeScript and Vite, designed to offer a robust and efficient development experience. The app integrates WordPress as a headless CMS for managing blog content, with a seamless connection to a live WordPress instance hosted on [The Exquisite Writers](https://theexquisitewriters.com).

## Table of Contents

-  [Overview](#overview)
-  [Features](#features)
-  [Tech Stack](#tech-stack)
-  [Getting Started](#getting-started)
   -  [Prerequisites](#prerequisites)
   -  [Installation](#installation)
-  [Development](#development)
-  [Production Build](#production-build)
-  [ESLint Configuration](#eslint-configuration)
-  [WordPress Integration](#wordpress-integration)
-  [License](#license)

## Overview

This application serves as a frontend for a blog platform, fetching and displaying content from a WordPress backend. The app is built with React and TypeScript, providing a modern and type-safe development environment. It leverages Vite for fast builds and hot module replacement (HMR), making development smooth and efficient.

The blog content is managed through WordPress, allowing for dynamic updates without redeploying the frontend. The application features a responsive design, ensuring a great user experience across devices.

## Features

-  **React + TypeScript:** Provides a strong foundation for building scalable and maintainable applications.
-  **Vite:** Fast and efficient bundler with HMR support.
-  **WordPress Integration:** Utilizes WordPress REST API for fetching and displaying blog posts.
-  **Dynamic Routing:** React Router is used for navigating between pages, with lazy loading for improved performance.
-  **Redux Toolkit:** State management with easy configuration and maintainability.
-  **Responsive Design:** Tailwind CSS is used for styling, ensuring responsiveness and a modern look.
-  **Scroll Spy:** Active menu highlighting based on the user's scroll position.

## Tech Stack

-  **React:** UI library for building interactive user interfaces.
-  **TypeScript:** Superset of JavaScript that adds static typing.
-  **Vite:** Next-generation frontend tooling.
-  **WordPress:** CMS used as a headless backend for managing blog content.
-  **Tailwind CSS:** Utility-first CSS framework for styling.
-  **Redux Toolkit:** State management solution.
-  **React Router:** For handling routing within the application.
-  **Moment.js:** For date formatting and manipulation.

## Getting Started

### Prerequisites

Ensure you have the following installed:

-  Node.js (>= 14.x)
-  npm or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/projectname.git
   cd projectname

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Run the development server:**

```bash
  npm run dev

```

4. Open your browser:
   Navigate to http://localhost:3000 to view the application.

## Development

### ESLint Configuration

The project includes a basic ESLint setup, but if you're developing a production application, consider enhancing the configuration:

-  **Parser Options:**
   ```bash
     {
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module",
       "project": ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
       "tsconfigRootDir": "__dirname"
     }
   ```

### Recommended Plugins:

-  Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked.
-  Optionally, add plugin:@typescript-eslint/stylistic-type-checked.
-  Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list.

## Production Build

To create a production build, run:

```bash
  npm run build
```

The build output will be located in the dist directory, ready to be deployed to a static hosting service.

## WordPress Integration

This application integrates with a WordPress backend. The content is fetched via the WordPress REST API and displayed in the React frontend. For setting up this integration on your own cPanel-hosted website, please refer to the cpanel-setup guide provided in the repository. This guide includes instructions on configuring .htaccess and other essential steps for seamless React and WordPress integration.

## License

This project is licensed under the MIT [License](#license) - see the LICENSE file for details.
