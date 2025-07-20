import '../style/header.css'
import { Link } from 'react-router-dom';
import AdminPage from './admipage';

function cabezalho(){

return(
<>
<header className='cabezalho'>
    <span className='span-logo-title'>
    <img className='logo'src='/img/nome da igreja.png' width={100}></img>
    <h1 className='title'><strong>Ala Itupeva</strong></h1>
    </span>
  <span className='administrador'><Link className='link-adm' to='/admpage' element ={<AdminPage/>}>@Admin</Link></span>
</header>
</>
)

}

export default cabezalho;