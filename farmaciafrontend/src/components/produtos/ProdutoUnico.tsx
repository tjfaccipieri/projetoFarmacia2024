import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Produtos } from '../../models/Produtos';
import { getWithoutToken } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';

function ProdutoUnico() {
  const [produto, setProduto] = useState<Produtos>({} as Produtos);

  const { id } = useParams<{ id: string }>();

  const {addCarrinho} = useContext(AuthContext)

  async function getProdutos() {
    await getWithoutToken(`/produtos/${id}`, setProduto);
  }

  function comprar(produto: Produtos){
    addCarrinho(produto)
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="flex gap-8 container mx-auto">
      <div className="w-1/12 flex flex-col gap-2 border border-gray-300 rounded-lg">
        <img
          className="rounded-lg border border-indigo-300 hover:opacity-50"
          src={produto.foto}
          alt="Foto do Produto"
        />
        <img
          className="rounded-lg border border-indigo-300 hover:opacity-50"
          src={produto.foto}
          alt="Foto do Produto"
        />
        <img
          className="rounded-lg border border-indigo-300 hover:opacity-50"
          src={produto.foto}
          alt="Foto do Produto"
        />
        <img
          className="rounded-lg border border-indigo-300 hover:opacity-50"
          src={produto.foto}
          alt="Foto do Produto"
        />
      </div>
      <div className="">
        <img
          className="rounded-lg border border-indigo-300 w-[450px]"
          src={produto.foto}
          alt="Foto do Produto"
        />
      </div>
      <div className="w-6/12">
        <h1 className="text-2xl font-bold">{produto.nome}</h1>
        <p className="text-xl font-bold">
          Preço:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(produto.preco)}
        </p>
        <p className="text-xl font-bold">Descrição: {produto.descricao} </p>
        <button onClick={() => comprar(produto)} className='bg-indigo-500 text-white font-bold w-full h-full rounded'>Comprar</button>
      </div>
    </div>
  );
}

export default ProdutoUnico;
