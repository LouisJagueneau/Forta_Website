import {Routes, Route} from 'react-router-dom'

// Pages Import
import Home from './pages/home'
import About from './pages/about'
import PlasticEngineering from './pages/plasticEngineering'
import CncParts from './pages/cncParts'
import LegalNotice from './pages/legalNotice'
import ConfidentialityPolicy from './pages/confidentialityPolicy'

function App() {
  return(
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/plasticEngineering' element={<PlasticEngineering/>} ></Route>
        <Route path='/cncParts'element={<CncParts/>}></Route>
        <Route path='/legalNotice' element={<LegalNotice/>}></Route>
        <Route path='/confidentialityPolicy' element={<ConfidentialityPolicy/>}></Route>
      </Routes>
    </div>   
  )
}
export default App