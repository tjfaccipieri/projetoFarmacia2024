import { Categoria } from "./Categoria";
import { User } from "./User";

export interface Produtos {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  foto: string;
  usuario: User | null;
  categoria: Categoria | null;
}

