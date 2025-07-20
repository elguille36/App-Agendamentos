import { useState } from 'react';
import AdmAgendamentos from './admagendamento';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../App';

export default function AdminPage() {
  const [logado, setLogado] = useState(false);
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação de login simples
    if (credenciais.email === 'admin@admin.com' && credenciais.senha === 'bispadoItupeva') {
      setLogado(true);
    } else {
      alert('Credenciais inválidas');
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
      <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <form onSubmit={handleLogin} className="bg-blue-50 p-6 rounded shadow-md w-80 outline-0">
          <h2 className="text-xl font-bold mb-4 text-center">Login Administrador</h2>

          <input
            type="email"
            placeholder="Email"
            value={credenciais.email}
            onChange={(e) => setCredenciais({ ...credenciais, email: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={credenciais.senha}
            onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
         <Link className='link-home-Cadastro' to='/' element={<App/>}>Ir para Inicio</Link>
      </div>
      </>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Painel do Administrador</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>

      <AdmAgendamentos />
    </div>
  );
}