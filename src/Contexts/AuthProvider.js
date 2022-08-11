import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  dados: [],
  isLoading: false,
});

export default function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDados([
        {
          info: "Nome:",
          content: "Bruno Milano",
          type: "string",
        },
        {
          info: "CPF:",
          content: "123.456.789-00",
          type: "string",
        },
        {
          info: "Data de nascimento:",
          content: "1996-07-26",
          type: "date",
        },
        {
          info: "RG:",
          content: "0.000.000",
          type: "string",
        },
        {
          info: "Email:",
          content: "brn.milano@gmail.com",
          type: "string",
        },
        {
          info: "Telefone:",
          content: "(61) 9 8342-6022",
          type: "string",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider value={{ dados, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
