import axios, { AxiosError } from 'axios';
import { createContext, useState } from 'react';
import { UserLogin } from '../models/UserLogin';
import { auth } from '../services/Service';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  userLogin: UserLogin;
  login(user: UserLogin): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: '',
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  async function login(user: UserLogin) {
    try {
      await auth('/usuarios/logar', user, setUserLogin);
      alert('logou');
      console.table(userLogin);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError.message);
        if (axiosError.response?.status === 401) {
          alert('Usuário ou senha inválidos');
          return;
        }
        if (axiosError.response?.status === 403) {
          alert('Não tem permissão para acessar');
          return;
        }
      } else {
        console.error('Unexpected error', error);
      }
    }
  }

  return (
    <AuthContext.Provider value={{ userLogin, login }}>
      {children}
    </AuthContext.Provider>
  );
}
