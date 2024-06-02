import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Categoria } from '../../models/Categoria';
import { getWithoutToken, post } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';

function CadastroCategoria() {

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [categorias, setCategorias] = useState<Categoria[]>([])

  const {userLogin} = useContext(AuthContext)

  function getFields(event: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [event.target.name]: event.target.value,
    });
  }

  async function cadastrarCategoria(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await post('/categorias', categoria, setCategoria, {
        headers: {
          Authorization:  userLogin.token
        }
      })
      alert(`Categoria ${categoria.categoria} cadastrada com sucesso!`)
    } catch (error) {
      console.log(error);
    }
  }

  async function buscarCategorias() {
    await getWithoutToken('/categorias', setCategorias)
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <>
      <main className='container mx-auto flex flex-col items-center gap-4 font-mono'>
          <h1 className='font-bold text-3xl text-center uppercase'>Cadastro de Categorias</h1>
          <form className='flex flex-col gap-4 w-1/2 mt-4' onSubmit={cadastrarCategoria}>
            <input type="text" placeholder="Nome da Categoria" className='border-2 px-4 py-2 border-indigo-800 rounded' onChange={(event) => getFields(event)} name='categoria' />
            <input type="text" placeholder="Logo da Categoria" className='border-2 px-4 py-2 border-indigo-800 rounded' onChange={(event) => getFields(event)} name='logoCategoria' />
            <button type="submit" className='bg-indigo-400 hover:bg-indigo-600 w-1/2 mx-auto px-4 py-2 rounded font-bold text-white uppercase'>Cadastrar</button>
          </form>

          <hr />

          <section>
            {categorias.map(categoria => (
              <p>{categoria.categoria}</p>
            ))}
          </section>
      </main>
    </>
  )
}

export default CadastroCategoria