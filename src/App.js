import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Test from "./pages/test";
import RootLayout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="test" element={<Test />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
