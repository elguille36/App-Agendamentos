import { useEffect, useState } from 'react';
import { getAgendamentos, deleteAgendamento } from '@/api/agendamentos';
import { Trash2 } from 'lucide-react';

export default function AdminAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [mensagem, setMensagem] = useState('');

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

    try {
      await deleteAgendamento(id);
      setAgendamentos(agendamentos.filter((a) => a.id !== id));
      setMensagem('Exluido com Succeso');
      setTimeout(() => setMensagem(''), 3000);
    } catch (err) {
      setMensagem('erro ao excluir agendamento');
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  if (loading) return <p>Carregando agendamentos...</p>;
  if (erro) return <p className="text-red-500">{erro}</p>;

  return (
    <>
    <div className="p-2 max-w-3x1 mx-auto">
      <h2 className="text-lg sm:text-2xl font-bold mb-4 text-center">Tipos de Agendamentos:</h2>
      <div className="overflow-x-auto">
      <table className="min-w-full text-sm sm:text-base">
        <thead className=" border-b border-blue-700">
          <tr className="h-10">
            <th className=" text-left px-3 py-2">Nome:</th>
            <th className=" text-left px-3 py-2">Data:</th>
            <th className=" text-left px-3 py-2">Horário:</th>
            <th className=" text-left px-3 py-2">Agendamentos:</th>
            <th className=" text-left px-2 py-2 hidden sm:table-cell">Observação:</th> 
          </tr>
        </thead>
        <tbody>
          {agendamentos.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">Nenhum agendamento encontrado.</td>
            </tr>
          ) : (
            agendamentos.map((ag) => (
              <tr key={ag.id} className="hover:bg-gray-50 transition-colors">
                <td className=" px-3 py-2">{ag.nome}</td>
                <td className=" px-3 py-2">{ag.data}</td>
                <td className=" px-3 py-2">{ag.horario}</td>
                <td className=" px-3 py-2">{ag.entrevista}</td>
                <td className=" px-3 py-2 hidden sm:table-cell">{ag.observacao}</td>
                <td className=" px-3 py-2 text-center">
                  <button
                    onClick={() => handleDelete(ag.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                   <Trash2 className="w-5 h-5" />
    
                  </button>
                  
                 {mensagem && (
                 <div className="absolute top-10 sm:text-lg left-50 p-3 rounded bg-gray-300 text-red-800 shadow">
                 {mensagem}
                 </div>
                 )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>

    </>
  );
}