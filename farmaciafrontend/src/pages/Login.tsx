import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';
import { auth } from '../services/Service';

function Login() {
  const navigate = useNavigate();

  const [userCad, setUserCad] = useState<User>({} as User);
  const [user, setUser] = useState<UserLogin>({} as UserLogin);

  const { userLogin, login } = useContext(AuthContext);

  function getFieldsLogin(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function getFieldsCad(event: ChangeEvent<HTMLInputElement>) {
    setUserCad({
      ...userCad,
      [event.target.name]: event.target.value,
    });
  }

  function handleLogin(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    login(user);
  }

  async function cadastrarUser(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      console.table(userCad);
      await auth('/usuarios/cadastrar', userCad, setUserCad);
      alert('Cadastrado com sucesso');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userLogin.token !== '') {
      navigate('/');
    }
  }, [userLogin]);

  return (
    <div>
      <main className="flex container mx-auto mt-8 gap-12 items-center">
        <div className="w-1/2 h-1/2" id="login">
          <h2 className="font-bold text-2xl text-center">Logar</h2>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <section className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="usuario"
                id="loginemail"
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(event) => getFieldsLogin(event)}
              />
            </section>
            <section className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="senha"
                id="loginpassword"
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(event) => getFieldsLogin(event)}
              />
            </section>
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md p-2 hover:bg-green-700 w-10/12 mx-auto"
            >
              Entrar
            </button>
          </form>
        </div>
        <div className="w-1/2 h-1/2" id="cadastro">
          <h2 className="font-bold text-2xl text-center">Cadastrar</h2>
          <form className="flex flex-col gap-4" onSubmit={cadastrarUser}>
            <section className="flex flex-col gap-2">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(event) => getFieldsCad(event)}
              />
            </section>
            <section className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="usuario"
                id="email"
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(event) => getFieldsCad(event)}
              />
            </section>
            <section className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="senha"
                id="password"
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(event) => getFieldsCad(event)}
              />
            </section>
            <section className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="border-2 border-gray-300 rounded-md p-2 "
              />
            </section>

            <button
              type="submit"
              disabled={userCad.senha === null}
              className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700 w-10/12 mx-auto disabled:bg-gray-400"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
