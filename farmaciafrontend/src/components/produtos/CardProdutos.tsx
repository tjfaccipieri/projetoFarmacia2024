interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  foto: string;
  categoria: string;
}

interface CardProdutosProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg m-2 mx-auto">
      <img
        className="w-full h-64 object-cover"
        src={produto.foto}
        alt={produto.nome}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{produto.nome}</div>
        <p className="text-gray-700 text-base">{produto.descricao}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {produto.categoria}
        </span>
        <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold mr-2">
          {produto.preco}
        </span>
      </div>
    </div>
  );
}

export default CardProdutos;
