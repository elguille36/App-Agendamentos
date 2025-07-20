import { useEffect, useState } from 'react';
import { getAgendamentos, deleteAgendamento } from '@/api/agendamentos';

export default function AdminAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const carregarAgendamentos = async () => {
    try {
      setLoading(true);
      const dados = await getAgendamentos();
      setAgendamentos(dados);
    } catch (err) {
      setErro('Erro ao carregar agendamentos.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir este agendamento?')) return;
    try {
      await deleteAgendamento(id);
      setAgendamentos(agendamentos.filter((a) => a.id !== id));
    } catch (err) {
      alert('Erro ao excluir agendamento.');
    }
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  if (loading) return <p>Carregando agendamentos...</p>;
  if (erro) return <p className="text-red-500">{erro}</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Agendamentos</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nome</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Horário</th>
            <th className="border p-2">Agendamentos</th>
            <th className="border p-2">Ações</th> 
          </tr>
        </thead>
        <tbody>
          {agendamentos.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">Nenhum agendamento encontrado.</td>
            </tr>
          ) : (
            agendamentos.map((ag) => (
              <tr key={ag.id}>
                <td className="border p-2">{ag.nome}</td>
                <td className="border p-2">{ag.data}</td>
                <td className="border p-2">{ag.horario}</td>
                <td className="border p-2">{ag.entrevista}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleDelete(ag.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}