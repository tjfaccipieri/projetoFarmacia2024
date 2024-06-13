import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import fusca from '/fusca.jpg'
import { RiAddFill, RiSubtractFill  } from "react-icons/ri";

function Carrinho() {

  const {carrinho} = useContext(AuthContext)

  return (
    <section className='container mx-auto mt-8 flex flex-col gap-2'>
      {carrinho.map(item => (
        <div className='border border-purple-700 rounded px-4 py-2 flex items-center justify-between'>
        <div className=' flex gap-4 items-center'>
          <img src={fusca} className='w-16 rounded border-2 border-purple-800' alt="" />
          <p className='font-semibold uppercase text-purple-900'>{item.nome}</p>
          <div className="flex ml-4 items-center  border-2 px-4 py-2 rounded-full border-purple-800 gap-4">
            <RiSubtractFill className='hover:bg-purple-200 rounded-full  '  />
            <span>1</span>
            <RiAddFill className='hover:bg-purple-200 rounded-full  '  />
          </div>
        </div>
        <span className="inline-block bg-purple-800 text-white px-4 py-1 rounded-full text-sm font-bold mr-2">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(item.preco)}
        </span>
        </div>
      ))}
      <p className='font-bold ml-auto text-xl'>Valor total: 199</p>
    </section>
  )
}

export default Carrinho