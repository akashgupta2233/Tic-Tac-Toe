import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Board from './component/Board.jsx'
import Winner from './component/Winner.jsx'
import { GameContextProvider } from './store/Context.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>,
    children:[
      {path:"/play", element:<Board/>},
      {path:"/winner", element:<Winner/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameContextProvider>
    <RouterProvider  router={router}/>
    </GameContextProvider>
  </StrictMode>,
)
