
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from './components/userPages/UserDetails';
import CourseCreation from './components/userPages/CourseCreation';
import CollegePost from './components/userPages/CollegePost';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:     <UserDetails/>,
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
  ]);
  return (
    <div className="App">
     <h1 className='font-bold text-2xl'>U got this arun</h1>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
