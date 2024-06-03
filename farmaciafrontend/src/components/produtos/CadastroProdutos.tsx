import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Categoria } from '../../models/Categoria';
import { Produtos } from '../../models/Produtos';
import { getWithoutToken, post } from '../../services/Service';

function CadastroProdutos() {
  const { userLogin } = useContext(AuthContext);

  const [produto, setProduto] = useState<Produtos>({} as Produtos);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  function getFields(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
      usuario: userLogin
    });
  }

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
      usuario: userLogin
    });
  }, [categoria]);

  async function cadastrarProduto(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.table(produto);

    try {
      await post('/produtos', produto, setProduto, {
        headers: {
          Authorization: userLogin.token,
        },
      });
      alert(`O produto ${produto.nome} foi cadastrado com sucesso`)
      setProduto({
        descricao: '',
        foto: '',
        nome: '',
        preco: 0,
        id: 0,
        categoria: null,
        usuario: null
      })
    } catch (error) {
      console.log(error);
    }
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
      <main className="flex flex-col gap-8 mt-8 container mx-auto text-center">
        <h1 className="text-3xl font-mono font-bold">Cadastro de Produtos</h1>
        <form
          className="flex flex-col gap-4 w-1/2 mx-auto"
          onSubmit={cadastrarProduto}
        >
          <input
            className="border-2 border-purple-800 px-4 py-2 rounded"
            type="text"
            value={produto.nome}
            name="nome"
            placeholder="Nome do Produto"
            onChange={(event) => getFields(event)}
          />
          <input
            className="border-2 border-purple-800 px-4 py-2 rounded"
            type="number"
            value={produto.preco}
            name="preco"
            placeholder="Preço"
            onChange={(event) => getFields(event)}
          />
          <input
            className="border-2 border-purple-800 px-4 py-2 rounded"
            type="text"
            value={produto.descricao}
            name="descricao"
            placeholder="Descrição"
            onChange={(event) => getFields(event)}
          />
          <input
            className="border-2 border-purple-800 px-4 py-2 rounded"
            type="text"
            value={produto.foto}
            name="foto"
            placeholder="URL da foto"
            onChange={(event) => getFields(event)}
          />
          <select
            className="border-2 border-purple-800 px-4 py-2 rounded"
            name="categoria"
            id="categoria"
            onChange={event => getWithoutToken(`/categorias/${event.target.value}`, setCategoria)}
          >
            <option value="" selected hidden>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
            ))}
          </select>

          <button
            type="submit"
            className="px-4 py-2 w-1/2 mx-auto bg-indigo-400 hover:bg-indigo-600 font-bold text-white rounded uppercase"
          >
            Cadastrar Produto
          </button>
        </form>
      </main>
    </>
  );
}

export default CadastroProdutos;
