import {Routes, Route, Link} from 'react-router-dom'

// Pages Import
import Home from './pages/home'
import About from './pages/about'

function App() {
  return(
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>   
  )
}
export default App