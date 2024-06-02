import React from 'react'

function CadastroProdutos() {
  return (
    <>
      <main>
        <h1>Cadastro de Produtos</h1>
        <form>
            <input type="text" placeholder="Nome do Produto" />
            <input type="text" placeholder="Preço" />
            <input type="text" placeholder="Descrição" />
            <input type="text" placeholder="Categoria" />
        </form>
      </main>
    </>
  )
}

export default CadastroProdutos