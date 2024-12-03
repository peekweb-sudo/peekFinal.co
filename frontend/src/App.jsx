import Navigation from "./assets/component/Navigation/navigation.jsx"
import './App.css'
import { Routes, Route} from "react-router-dom"
import HomePage from "./assets/component/Navigation/pages/homePage/HomePage.jsx"

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>}/>

      </Routes>    
    </>
  )
}

export default App
