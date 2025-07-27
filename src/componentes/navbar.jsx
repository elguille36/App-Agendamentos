
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ícones (você pode usar heroicons ou outro)
import { Link } from 'react-router-dom';
import CadastroAgendamento from './cadastroagendamento.jsx'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
    <nav className="bg-blue-500 text-amber-100 px-4 py-1 flex justify-between items-center">

      {/* Botão para mobile */}
      <button onClick={toggleMenu} className="md:hidden text-blue-50">
        {menuAberto ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Links de navegação - escondidos no mobile, visíveis no desktop */}
      <ul className="hidden md:flex space-x-6">
      <li><a className='hover:underline'href='https://bit.ly/4jR3zWq' target='_blank'>Almoço con Misionarios</a></li>
      <li><a className='hover:underline'href='https://docs.google.com/spreadsheets/d/1J5xSG7R2HJuGCKx1w34xqHyAXFKashB-7N8eBi_oTE8/edit?gid=1173913733#gid=1173913733' target='_blank'>Grupo da Limpeza</a></li>
      <li><Link className='hover:underline'to='/cadastroAgendamento' element ={<CadastroAgendamento/>}>Agendamentos</Link></li>
      {/* <li><Link className='hover:underline'to='' element >Access @Admin</Link></li> */}
      </ul>

      {/* Menu Mobile - aparece quando o menuAberto for true */}
      {menuAberto && (
        <div className="absolute top-45 left-15 rounded-md w-64 bg-blue-700 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 underline-offset-2">
          <li><a onclick={toggleMenu} href='https://bit.ly/4jR3zWq' target='_blank'>Almoço con Misionarios</a></li>
          <li><a onclick={toggleMenu} href='https://docs.google.com/spreadsheets/d/1J5xSG7R2HJuGCKx1w34xqHyAXFKashB-7N8eBi_oTE8/edit?gid=1173913733#gid=1173913733' target='_blank'>Grupo da Limpeza</a></li>
          <li><Link onclick={toggleMenu} to='/cadastroAgendamento' element ={<CadastroAgendamento/>}>Agendamentos</Link></li>
        
          </ul>
        </div>
      )}
    </nav>
  
    </>
  );
}
