import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Blog, SignIn, SignUp } from './pages'
import AllBlogs from './pages/AllBlogs'
import PublishBlog from './pages/PublishBlog'
import LandingPage from './pages/Landingpage'

const router = [
  {
    path: "/",
    element: <LandingPage />
  },
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
  {
    path: "/blogs",
    element: <AllBlogs />
  },
  {
    path: "/publish",
    element: <PublishBlog />
  }
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
