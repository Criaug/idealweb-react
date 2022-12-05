import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
});

export const useApi = () => ({
  validaToken: async (token: string) => {
    return {
      usuario: { id: 2, nome: 'Cristian', img: '' },
    };
    //const response = await api.post('/validaToken', { token });
    // return response.data;
  },
  login: async (usuario: string, senha: string) => {
    return {
      usuario: { id: 2, nome: 'Cristian', img: '' },
      token: 'aijsdoiajsdioasjdoiajsoidj',
    };
    // const response = await api.post('/login', { usuario, senha });

    //return response.data;
  },
  logout: async () => {
    return { status: true };
    // const response = await api.post('/logout');
    // return response.data;
  },
});
