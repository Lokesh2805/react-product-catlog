# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Instruction to install and run the application 
Step 1 : clone the project from GitHub repository on your local machine.
Step 2 : navigate to the root directory.
Step 3 : run the command `npm install` to install all the dependencies.
Step 4 : run the command `npm run dev` to start the development server.
Step 5 : open your browser and navigate to `http://localhost:5173/` to view live application.

# Additional libraries used
- `react-router-dom` for routing. 
- `heroicons and Material-ui` for icons.
- `Tailwind` for CSS and styling.

# Challenges faced

`Switching to API Data`: Transitioning from static JSON to API data introduced challenges like handling asynchronous operations and errors. I resolved this by using useEffect for API calls, adding loading and error states for better user feedback.

`Dynamic Filtering and Sorting`: Managing multiple states for search, category, and sorting was tricky. I centralized the logic in useEffect, ensuring real-time updates to the product list.

`Responsive Design`: Displaying inconsistent image sizes across devices was challenging. I used Tailwind CSS utilities like object-cover and responsive grids to maintain a clean, cohesive layout.

# optional enhancements implemented
Sorting
Add to Cart Functionality
Animations
Custom Styles
Use of API Instead of Static JSON

# Screenshots file added in src folder


