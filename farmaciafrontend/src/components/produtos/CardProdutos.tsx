import { Link } from 'react-router-dom';
import { Produtos } from '../../models/Produtos';

interface CardProdutosProps {
  produto: Produtos;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg m-2 mx-auto border-gray-200 border-2 hover:shadow-xl cursor-pointer">
      <img
        className="w-full h-64 object-cover"
        src={produto.foto || "https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png"}
        alt={produto.nome}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{produto.nome}</div>
        <p className="text-gray-700 text-lg font-semibold">{produto.descricao}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center mb-2">
        <span className="inline-block bg-indigo-200 rounded-full px-4 py-1 text-sm font-bold text-gray-700 mr-2">
          {produto.categoria?.categoria}
        </span>
        <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mr-2">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(produto.preco)}
        </span>
      </div>
      <div className='w-full flex justify-center mb-4'>
        <Link to={`/produtos/${produto.id}`} className='w-10/12'><button className='rounded bg-purple-400 w-full text-white font-bold py-2'>Detalhes</button></Link>
      </div>
    </div>
  );
}

export default CardProdutos;
