import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center container mx-auto mt-8">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-xl"><Link to='/'>Logo</Link></div>
        <div>Produtos</div>
        <Link to='/categorias'>Categorias</Link>
      </div>
      <div>
        <Link to='/login' 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
      </div>
    </div> 
  );
}

export default Navbar;
