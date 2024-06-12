import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Carrinho() {

  const {carrinho} = useContext(AuthContext)

  return (
    <section className='container mx-auto mt-8 flex flex-col gap-2'>
      {carrinho.map(item => (
        <div className='border border-purple-700 rounded px-4 py-2'>
          <p>{item.nome}</p>
        </div>
      ))}
    </section>
  )
}

export default Carrinho