import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css"
import { Home } from './assets/pages/Home'
import { Sobre } from './assets/pages/Sobre'
import { Portfolio } from './assets/pages/Portfólio'
import { Contato } from './assets/pages/Contato'
import { Menu } from './Menu'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contato" element={<Contato/>} />
        </Route>
        
      </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
