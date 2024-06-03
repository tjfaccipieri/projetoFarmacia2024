import { useEffect, useState } from 'react';
import { Categoria } from '../../models/Categoria';
import { getWithoutToken } from '../../services/Service';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await getWithoutToken('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);
  return (
    <section className='shadow-lg rounded px-4 py-2 border-2'>
      {categorias.map((categoria) => (
        <p id={categoria.id.toString()}>{categoria.categoria}</p>
      ))}
    </section>
  );
}

export default ListaCategorias;
