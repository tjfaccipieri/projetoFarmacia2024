import CardProdutos from '../components/produtos/CardProdutos';

const produtos = [
  {
    nome: 'Produto Exemplo 1',
    descricao: 'Descrição detalhada do produto 1.',
    preco: 'R$ 19,90',
    foto: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Eletrônicos',
  },
  {
    nome: 'Produto Exemplo 2',
    descricao: 'Descrição detalhada do produto 2.',
    preco: 'R$ 29,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Moda',
  },
  {
    nome: 'Produto Exemplo 3',
    descricao: 'Descrição detalhada do produto 3.',
    preco: 'R$ 39,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Beleza',
  },
  {
    nome: 'Produto Exemplo 4',
    descricao: 'Descrição detalhada do produto 4.',
    preco: 'R$ 49,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Casa e Jardim',
  },
  {
    nome: 'Produto Exemplo 5',
    descricao: 'Descrição detalhada do produto 5.',
    preco: 'R$ 59,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Esportes',
  },
  {
    nome: 'Produto Exemplo 6',
    descricao: 'Descrição detalhada do produto 6.',
    preco: 'R$ 69,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Livros',
  },
  {
    nome: 'Produto Exemplo 7',
    descricao: 'Descrição detalhada do produto 7.',
    preco: 'R$ 79,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Alimentos',
  },
  {
    nome: 'Produto Exemplo 8',
    descricao: 'Descrição detalhada do produto 8.',
    preco: 'R$ 89,90',
    foto: 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categoria: 'Brinquedos',
  },
];
function Home() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="text-xl text-center">Todos os produtos</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map((produto, index) => (
            <CardProdutos key={index} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
