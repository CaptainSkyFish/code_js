import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/SignUp"
import Signin from "./pages/SignIn"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import "./App.css"
import Background from "./UI/Background"


export default function App() {
  return (
    <BrowserRouter>
      <Background />
        <div className="content">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}
