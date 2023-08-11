
import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import UserDetails from './components/userPages/UserDetails';
import CourseCreation from './components/userPages/CourseCreation';
import CollegePost from './components/userPages/CollegePost';
import NotificationPage from './components/userPages/NotificationPage';
import MovieInputs from './components/userPages/MovieInputs';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserDetails/>,
      children: [
        {
          path: "/",
          element: <CourseCreation/>,
        },
      ],
    },
    {
      path: "/post",
      element:<CollegePost/>,
    },
    {
      path: "/notification",
      element:<NotificationPage/>,
    }, {
      path: "/movies",
      element:<MovieInputs/>,
    },
    
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
     <ToastContainer /> 
    </div>
  );
}

export default App;
