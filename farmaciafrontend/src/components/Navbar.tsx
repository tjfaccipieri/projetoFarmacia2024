function Navbar() {
  return (
    <div className="flex justify-between items-center container mx-auto mt-8">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-xl">Logo</div>
        <div>Produtos</div>
        <div>Categorias</div>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log('Login')}
        >
          Login
        </button>
      </div>
    </div> 
  );
}

export default Navbar;
