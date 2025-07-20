import { useState } from 'react';
// import Comunicado from './informacao';
import { Link } from 'react-router-dom';
import App from '../App';
import Footer from './footer';
import { criarAgendamento } from '@/api/agendamentos';

export default function AgendamentoForm() {
  const [form, setForm] = useState({
    nome: '',
    data: '',
    horario: '',
    agendamento: '',
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
    alert("Agendamento enviado com sucesso!");
    setForm({ nome: '', data: '', horario: '', agendamento: '', observacao: '' });
  } catch (err) {
    console.error('Erro ao enviar agendamento:', err);
    alert("Erro ao enviar agendamento. Tente novamente.");
  }
};

  return (
    <>
    <div className='box-cadastro'>
    <Link className='link-home' to='/' element={<App/>}>Ir para Inicio</Link>
    <div className="box-cadastro-content">
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
        name="agendamento"
        value={form.agendamento}
        onChange={handleChange}
        className="w-full  p-2 border border-gray-300 rounded bg-blue-100"
        required
      >
        <option value="">Tipo de Agendamentos</option>
        <option value="Bispo Patelli">Entv.1ra Recomendação</option>
        <option value="Bispo Patelli">Entv.Acerto Anual Dizimo</option>
        <option value="1ro e 2do Conselheiro">Entv.Renovação da Recomendação</option>
        <option value="Bispo Patelli">Entv.Benção Patriarcal</option>
        <option value="Bispo Patelli">Entv.Assunto Sigiloso</option>
        <option value="Prednt.Cuorums Elderes">Assunto da Familia</option>
        <option value="Predencia do Courums">Assunto Ministração Elderes</option>
        <option value="Presidencia Soc.soc">Assunto Ministração Soc.soc </option>
        <option value="Presidenta Soc.soc">Assunto Familiares Bem-Estar</option>
        <option value="Odair Figueiredo">Caravana ao Templo</option>
        <option value="Obispado">Outros Assunto Mencione Qual 👇</option>
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