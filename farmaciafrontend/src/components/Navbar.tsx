import { useContext } from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  /* The line `const { userLogin, logout, carrinho } = useContext(AuthContext);` is using the `useContext` hook from React to access the values stored in the `AuthContext` context. */
  const { userLogin, logout, carrinho } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center container mx-auto mt-8">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-xl">
          <Link to="/">Logo</Link>
        </div>
        <Link to="/produtos">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative py-4">
          <Link to="/carrinho">
            <RiShoppingCart2Fill
              className="text-purple-950 relative"
              size={24}
            />
          </Link>
          <span className="bg-red-300 absolute rounded-full px-1 text-xs top-2 -right-1">
            {carrinho.length}
          </span>
        </div>
        {userLogin.token === '' ? (
          <Link
            to="/login"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Sair
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
