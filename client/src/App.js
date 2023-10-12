import TopBar from "./components/topBar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Singlepage from "./pages/single/Singlepage";
import Writepage from "./pages/write/Writepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

//FIXME:  whit this solution; NavLink and Link components gives error !!

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route path="/" element={<Home />} />
//       <Route path="register" element={user ? <Home /> : <Register />} />
//       <Route path="login" element={user ? <Home /> : <Login />} />
//       <Route path="write" element={user ? <Writepage /> : <Register />} />
//       <Route path="settings" element={user ? <Settings /> : <Register />} />
//       <Route path="post/:postId" element={<Singlepage />} />
//     </Route>
//   )
// );

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="write" element={user ? <Writepage /> : <Register />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
          <Route path="post/:postId" element={<Singlepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
