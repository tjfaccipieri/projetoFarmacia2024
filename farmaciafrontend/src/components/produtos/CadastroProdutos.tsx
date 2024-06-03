import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Produtos } from '../../models/Produtos'
import { AuthContext } from '../../contexts/AuthContext';
import { Categoria } from '../../models/Categoria';
import { getWithoutToken } from '../../services/Service';

function CadastroProdutos() {

  const {userLogin} = useContext(AuthContext)

  const [produto, setProduto] = useState<Produtos>({} as Produtos)

  function getFields(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
    });
  }

  async function cadastrarProduto(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    console.table(produto);
  }

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await getWithoutToken('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      <main className='flex flex-col gap-8 mt-8 container mx-auto text-center'>
        <h1 className='text-3xl font-mono font-bold'>Cadastro de Produtos</h1>
        <form className='flex flex-col gap-4 w-1/2 mx-auto' onSubmit={cadastrarProduto}>
            <input className='border-2 border-purple-800 px-4 py-2 rounded' type="text" name='nome' placeholder="Nome do Produto" onChange={(event) => getFields(event)} />
            <input className='border-2 border-purple-800 px-4 py-2 rounded' type="number" name='preco' placeholder="Preço" onChange={(event) => getFields(event)} />
            <input className='border-2 border-purple-800 px-4 py-2 rounded' type="text" name='descricao' placeholder="Descrição" onChange={(event) => getFields(event)} />
            <input className='border-2 border-purple-800 px-4 py-2 rounded' type="text" name='foto' placeholder="URL da foto" onChange={(event) => getFields(event)} />
            <select className='border-2 border-purple-800 px-4 py-2 rounded' name="categoria" id="categoria">
              <option value="" selected hidden>Selecione uma categoria</option>
              {categorias.map(categoria => (
                <option value={categoria.categoria}>{categoria.categoria}</option>
              ))}
            </select>

            <button type='submit' className='px-4 py-2 w-1/2 mx-auto bg-indigo-400 hover:bg-indigo-600 font-bold text-white rounded uppercase'>Cadastrar Produto</button>
        </form>
      </main>
    </>
  )
}

export default CadastroProdutos