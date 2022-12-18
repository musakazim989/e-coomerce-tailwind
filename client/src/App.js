import Navbar from "./components/layout/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom"
import RootLayout from "./components/RootLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
