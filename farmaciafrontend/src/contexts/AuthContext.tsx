import axios, { AxiosError } from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Produtos } from '../models/Produtos';
import { UserLogin } from '../models/UserLogin';
import { auth } from '../services/Service';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  userLogin: UserLogin;
  login(user: UserLogin): Promise<void>;
  carrinho: Produtos[];
  addCarrinho(produto: Produtos): void;
  logout(): void;
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

  const [carrinho, setCarrinho] = useState<Produtos[]>([]);

  /**
   * The function `login` is an asynchronous function in TypeScript React that handles user login, displaying success messages and handling different error scenarios.
   * @param {UserLogin} user - The `user` parameter in the `login` function is of type `UserLogin`, which likely contains the user's login credentials such as username and password. It is used to authenticate the user when logging in.
   * @returns If the login is successful, a success toast message is displayed. If there is an error during the login process, either an alert message for invalid user credentials or lack of permission is shown. If there is an unexpected error, it is logged to the console.
   */
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

  /**
   * The `logout` function resets the user login information and logs a message indicating the user has logged out.
   */
  function logout() {
    setUserLogin({
      id: '',
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: '',
    });
    console.log('saiu');
  }

  
  function addCarrinho(produto: Produtos) {
    setCarrinho((currentItems: Produtos[]) => {
      const existingItem = currentItems.find((item) => item.id === produto.id);
      if (existingItem) {
        return currentItems.map((item) => item.id === produto.id ? { ...produto, qtd: item.qtd! + 1 } : item);
      } else {
        return [...currentItems, { ...produto, qtd: 1 }];
      }
    });
    console.log(carrinho);
  }

  /* The `return` statement in the `AuthProvider` component is returning the JSX code that defines the structure of the component. In this case, it is returning a `Provider` component from the `AuthContext` with specific values passed as the `value` prop. */
  return (
    <AuthContext.Provider
      value={{ userLogin, login, carrinho, addCarrinho, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
