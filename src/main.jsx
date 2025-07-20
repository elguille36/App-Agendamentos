import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import CadastroAgendamento from './componentes/cadastroagendamento.jsx'
import './style/header.css'
import App from './App.jsx'
import AdmiPage from './componentes/admipage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path ='/' element ={<App/>}></Route>
    <Route path ='/cadastroAgendamento' element ={<CadastroAgendamento />}></Route>
    <Route path ='/admpage' element ={<AdmiPage/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
