import { Produtos } from "./Produtos";

export interface Categoria {
  id: number;
  categoria: string;
  logoCategoria: string;
  produtos: Produtos[];
}


