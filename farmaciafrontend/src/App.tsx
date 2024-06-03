import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'
import CadastroCategoria from './components/categorias/CadastroCategoria'
import CadastroProdutos from './components/produtos/CadastroProdutos'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<CadastroCategoria />} />
          <Route path="/produtos" element={<CadastroProdutos />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
