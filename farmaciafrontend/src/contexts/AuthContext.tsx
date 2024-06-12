import axios, { AxiosError } from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { UserLogin } from '../models/UserLogin';
import { auth } from '../services/Service';
import { Produtos } from '../models/Produtos';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  userLogin: UserLogin;
  login(user: UserLogin): Promise<void>;
  carrinho: Produtos[];
  addCarrinho (produto: Produtos): void;
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

  const [carrinho, setCarrinho] = useState<Produtos[]>([])

  async function login(user: UserLogin) {
    try {
      await auth('/usuarios/logar', user, setUserLogin);
      toast.success(`Usuario logado`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
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

  

  function addCarrinho(produto: Produtos){
    setCarrinho((currentItems: Produtos[]) => {
      return[...currentItems, produto]
    })
    console.log(carrinho);
  }

  return (
    <AuthContext.Provider value={{ userLogin, login, carrinho, addCarrinho }}>
      {children}
    </AuthContext.Provider>
  );
}
