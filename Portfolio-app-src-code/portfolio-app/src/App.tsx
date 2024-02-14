import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NavigationBar from './Components/Global Components/NavigationBar'

function App() {


  return (
    <>    
    <NavigationBar />
    <div className="application-main-container">
      <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
