import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import ExpDetails from "./pages/ExpDetails/ExpDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <div className="app_wrapper">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/details/:id", element: <ExpDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
