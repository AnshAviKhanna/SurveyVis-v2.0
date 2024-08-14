import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from "./Components/Home/Home"
import 'leaflet/dist/leaflet.css';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<>
      <Home/>
      </>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
