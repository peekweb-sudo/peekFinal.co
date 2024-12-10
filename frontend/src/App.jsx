import Navigation from "./assets/component/Navigation/navigation.jsx"
import './App.css'
import { Routes, Route} from "react-router-dom"
import HomePage from "./assets/component/Navigation/pages/homePage/HomePage.jsx"
import Blogs from "./assets/component/Navigation/pages/Blogs/blogs.jsx"
import SignIn from "./assets/component/Navigation/pages/Auth/signIn/signIn.jsx"

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/signin" element ={ <SignIn/>}/>
      </Routes>    
    </>
  )
}

export default App
