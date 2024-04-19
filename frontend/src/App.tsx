import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Blog, SignIn, SignUp } from './pages'

const router = [
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/blog/:id",
    element: <Blog />
  },
]

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map((route, idx) => (
            <Route path={route.path} key={idx} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
