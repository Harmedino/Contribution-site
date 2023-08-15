import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Navigation from "./pgaes/Navigation";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login' , element: <Login /> },
    {path:'/register', element:<Register/>}
])

  return (
    <div>
      <RouterProvider router={ router} />
    </div>
  );
}

export default App;
