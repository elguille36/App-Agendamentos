import './App.css'
import Cabezalho from './componentes/header'
import NavBar from './componentes/navbar'
import BannerCarrossel from './componentes/bannercarrousel'
import Footer from './componentes/footer'
import Comunicado from './componentes/informacao'
// import CadastroAgendamneto from './componentes/cadastroagendamento'
// import Comunicado from './componentes/informacao'

function App() {
  return (
    <>
    <div className='w-full bg-blue-100 h-75 '>
      <div className='box-content-app'>
      <Cabezalho />
      {/* <NavBar />  */}
      </div>
       <NavBar /> 
    </div>
    <div className='flex justify-center '>
      <Comunicado/>
    </div>
      {/* <NavBar />  */}
    <div className='box-banner'>
        <BannerCarrossel />
    </div>
    <Footer/>
    </>
  )
}

export default App
