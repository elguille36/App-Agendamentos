import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import App from '../App';
import Footer from './footer';
import Cabezalho from './header'
import { criarAgendamento } from '@/api/agendamentos';

export default function AgendamentoForm() {
  const [mensagem, setMensagem] = useState('');
  const [form, setForm] = useState({
    nome: '',
    data: '',
    horario: '',
    entrevista: '',
    observacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await criarAgendamento(form);
    setMensagem('✅Agendado com sucesso!');
      setTimeout(() => setMensagem(''), 3000); 
    setForm({ nome: '', data: '', horario: '', entrevista: '', observacao: '' });
  } catch (err) {
     setMensagem('Erro ao criar agendamento.');
      setTimeout(() => setMensagem(''), 3000);
  }
};

  return (
    <>
    <Cabezalho/>
    <div className='box-cadastro'>
    {/* <Link className='link-home' to='/' element={<App/>}>Ir para Inicio</Link> */}
    <div className="box-cadastro-content">
        {mensagem && (
    <div
      className={`absolute top-7 sm:text-lg left-40 p-3 w-80 rounded flex items-center gap-2 text-blue-900
      ${mensagem.includes('Erro') ? 'bg-red-500' : 'bg-gray-300'}`}
    >
      {mensagem}
    </div>
  )}
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-blue-300 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Novo Agendamento</h2>

      <input
        type="text"
        name="nome"
        placeholder="Seu nome e Sobrenome"
        value={form.nome}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded bg-blue-100"
        required
      />

      <input
        type="date"
        name="data"
        value={form.data}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded bg-blue-100"
        required
      />

      <input
        type="time"
        name="horario"
        value={form.horario}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded bg-blue-100"
        required
      />

      <select
        name="entrevista"
        value={form.entrevista}
        onChange={handleChange}
        className="w-full  p-2 border border-gray-300 rounded bg-blue-100"
        required
      >
        <option value="">Tipo de Agendamentos</option>
        <option value="Entrevista 1ra Recomendação">Entrevista 1ra Recomendação</option>
        <option value="Entrevista Acerto Anual Dizimo">Entrevista Acerto Anual Dizimo</option>
        <option value="Entrevista Renovação da Recomendação">Entrevista Renovação da Recomendação</option>
        <option value="Entrevista Benção Patriarcal">Entrevista Benção Patriarcal</option>
        <option value="Entrevista Assunto Sigiloso">Entrevista Assunto Sigiloso</option>
        <option value="Assunto da Familia">Assunto da Familia</option>
        <option value="Assunto Ministração Elderes">Assunto Ministração Elderes</option>
        <option value="Assunto Ministração Soc.soc">Assunto Ministração Soc.soc </option>
        <option value="Assunto Familiares Bem-Estar">Assunto Familiares Bem-Estar</option>
        <option value="Caravana ao Templo">Caravana ao Templo</option>
        <option value="Outros Assunto Mencione Qual">Outros Assunto Mencione Qual 👇</option>
      </select>

      <textarea
        name="observacao"
        placeholder="Observações (outros assunto)"
        value={form.observacao}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded bg-blue-100"
        rows="3"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Salvar Agendamento
      </button>
    </form>
    </div>
    <Footer />
    </div>
   </>
    
  );
}