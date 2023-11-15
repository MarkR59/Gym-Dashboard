import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App.jsx';
import Nutrition from './pages/Nutrition.jsx';
import Lifting from './pages/Lifting.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Nutrition',
    element: <Nutrition />,
  },
  {
    path: '/Lifting',
    element: <Lifting />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
