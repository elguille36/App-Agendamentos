import { useState } from 'react';
import AdmAgendamentos from './admagendamento';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import App from '../App';
import {LogOut} from 'lucide-react';
import Cabezalho from './header'
import Footer from './footer';

export default function AdminPage() {
  const [logado, setLogado] = useState(false);
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
  const [mensagem, setMensagem] = useState('');
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação de login simples
    if (credenciais.email === 'admin@admin.com' && credenciais.senha === 'bispadoItupeva') {
      setLogado(true);
    } else {
       setMensagem('❌ Email ou Senha Invalida');
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setLogado(false);
    setCredenciais({ email: '', senha: '' });
    navigate('/');
  };

  if (!logado) {
    return (
        <>
           {mensagem && (
            <div className="absolute top-10 sm:text-lg left-35 p-3 rounded bg-gray-300 text-red-800 shadow">
            {mensagem}
            </div>
            )}
      <Cabezalho/>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className='flex justify-start w-full'>
        {/* <Link className='link-home-Cadastro' to='/' element={<App/>}>Ir para Inicio</Link>  */}
        </div>
        <form onSubmit={handleLogin} className="bg-blue-300 p-6 rounded shadow-md w-80 outline-0">
          <h2 className="text-xl font-bold mb-4 text-center">Login Administrador</h2>

          <input
            type="email"
            placeholder="Email"
            value={credenciais.email}
            onChange={(e) => setCredenciais({ ...credenciais, email: e.target.value })}
            className="w-full p-2 border rounded mb-4 outline-0 bg-gray-100"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={credenciais.senha}
            onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
            className="w-full p-2 border rounded mb-4 outline-0 bg-gray-100"
            required
          />

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Entrar
          </button>
        </form> 
      </div>
      <Footer/>
      </>
    );
  }

  return (
           
    <div className=" overflow-x-auto">
      <div className="w-full flex justify-between items-center mb-4 bg-gray-50 p-1">
        <h2 className="text-2xl font-bold">Painel do Administrador</h2>
        <button
          onClick={handleLogout}
          className=" px-4 py-1 rounded cursor-pointer "
        ><LogOut className='w-5 h-5 text-blue-950'/>
        Sair
        </button>
      </div>
      <AdmAgendamentos />
    </div>
  );
}