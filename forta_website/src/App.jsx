import {Routes, Route} from 'react-router-dom'

// Pages Import
import Home from './pages/home'
import About from './pages/about'
import PlasticEngineering from './pages/plasticEngineering'

function App() {
  return(
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/plasticEngineering' element={<PlasticEngineering/>} ></Route>
      </Routes>
    </div>   
  )
}
export default App