import React, { useEffect, useState } from 'react'
import { Produtos } from '../../models/Produtos'
import { getWithoutToken } from '../../services/Service'

function ListaProdutosAdm(props) {

  const [produtos, setProdutos] = useState<Produtos[]>([])

  async function getAll() {
    await getWithoutToken('/produtos', setProdutos)
  }

  useEffect(() => {getAll()}, [])

  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-3xl font-bold font-mono text-center '>Lista de produtos da Farmacia</h2>

      <table className='border-2 w-full mt-4'>
        <tr className='border-2 font-bold text-center'>
          <td className='border'>ID</td>
          <td className='border'>Nome</td>
          <td className='border'>Preço</td>
          <td className='border'>Categoria</td>
          <td className='border w-1/5'>Ações</td>
        </tr>
      {produtos.map(prod => (
        <tr className='border-2'>
          <td className='border'>
            {prod.id}
          </td>
          <td className='border'>
            {prod.nome}
          </td>
          <td className='border'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(prod.preco)}
          </td>
          <td className='border'>
            {prod.categoria?.categoria}
          </td>
          <td className='flex gap-3 px-4'>
            <button className='bg-indigo-600 text-white text-center w-full' onClick={() => props.getProduto(prod.id)}>Editar</button>
            <button className='bg-red-600 text-white text-center w-full'>Apagar</button>
          </td>
        </tr>
      ))}
      </table>
    </div>
  )
}

export default ListaProdutosAdm