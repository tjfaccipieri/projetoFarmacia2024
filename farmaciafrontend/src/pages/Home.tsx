import { useEffect, useState } from 'react';
import CardProdutos from '../components/produtos/CardProdutos';
import { Produtos } from '../models/Produtos';
import { getWithoutToken } from '../services/Service';

function Home() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  async function getProdutos() {
    await getWithoutToken('/produtos', setProdutos);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="text-xl text-center">Todos os produtos</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map((produto: Produtos, index: number) => (
            <CardProdutos key={index} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
