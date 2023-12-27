import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about";
import Test from "./pages/test";
import MainLayout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<About />} />
      <Route path="test" element={<Test />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
