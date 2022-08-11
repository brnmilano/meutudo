import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

export default function useAuth() {
  const { dados, isLoading } = useContext(AuthContext);

  const nomeItem = dados.find((item) => item.info === "Nome:") ?? {};

  const cpfItem = dados.find((item) => item.info === "CPF:") ?? {};

  return { dados, isLoading, nome: nomeItem.content, cpf: cpfItem.content};
}
