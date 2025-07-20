import api from './api'; // importa o axios configurado


export const criarAgendamento = async (dados) => {
  const response = await api.post(`/agendamentos`, dados);
  return response.data;
};

export const getAgendamentos = () => api.get('/agendamentos');

export const deleteAgendamento = (id) => api.delete(`/agendamentos/${id}`);