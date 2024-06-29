import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'
import CadastroCategoria from './components/categorias/CadastroCategoria'
import CadastroProdutos from './components/produtos/CadastroProdutos'
import ProdutoUnico from './components/produtos/ProdutoUnico'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Carrinho from './components/Carrinho'
import ListaProdutosAdm from './components/produtos/ListaProdutosAdm'

function App() {

  return (
    <AuthProvider>
      <ToastContainer />  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<CadastroCategoria />} />
          <Route path="/produtos" element={<CadastroProdutos />} />
          <Route path="/produtos/:id" element={<ProdutoUnico />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/listaprodutosadm" element={<ListaProdutosAdm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
