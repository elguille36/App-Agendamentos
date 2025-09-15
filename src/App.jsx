import './App.css'
import Cabezalho from './componentes/header'
import NavBar from './componentes/navbar'
import BannerCarrossel from './componentes/bannercarrousel'
import Footer from './componentes/footer'
import Comunicado from './componentes/informacao'

function App() {
  return (
    <>
    <div className='w-full h-75 bg-blue-50 '>
      <div className='box-content-app'>
      <Cabezalho />
      </div>
       <NavBar /> 
    </div>
    <div className='flex justify-center bg-blue-100 shadow-inner'>
      <Comunicado/>
    </div>
    <div className='box-banner'>
        <BannerCarrossel />
    </div>
    <Footer/>
    </>
  )
}

export default App
