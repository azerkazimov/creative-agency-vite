import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Routes } from "./routes/router"

function App() {
  const router = createBrowserRouter(Routes)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
