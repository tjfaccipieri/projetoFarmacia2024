import { useEffect, useState } from 'react';
import CardProdutos from '../components/produtos/CardProdutos';
import { Produtos } from '../models/Produtos';
import { getWithoutToken } from '../services/Service';
import BannerEntregas from '../components/gerais/BannerEntregas';
import { LuAlarmClock, LuCreditCard, LuTruck, LuWallet } from 'react-icons/lu';

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
        <div className="flex gap-5">
          <BannerEntregas icone={<LuCreditCard className='text-teal-600 ' />} texto='Parcele em até' textoBold='6x sem juros' />
          <BannerEntregas icone={<LuWallet className='text-red-600 ' />} texto='5% de desconto' textoBold='no pix ou boleto' />
          <BannerEntregas icone={<LuTruck className='text-teal-600 ' />} texto='Acima de R$200' textoBold='frete gratis' />
          <BannerEntregas icone={<LuAlarmClock className='text-red-600 ' />} texto='Entrega em' textoBold='até 4 hora' />
        </div>
        <div className="text-xl text-center">Todos os produtos</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {produtos.map((produto: Produtos, index: number) => (
            <CardProdutos key={index} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
