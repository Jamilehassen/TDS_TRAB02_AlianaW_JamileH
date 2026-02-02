import { useState, useEffect } from 'react';

// REQUISITO: Custom hook para realização de requisições 
export const useFetch = (url) => {
  // Estados para gerenciar os dados, o carregamento e possíveis erros [cite: 897]
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // REQUISITO: Função assíncrona para busca de dados [cite: 804, 899]
    const fetchData = async () => {
      setIsLoading(true); // Inicia o estado de carregamento
      
      try {
        // REQUISITO: Uso da Fetch API [cite: 32, 805, 901]
        const res = await fetch(url);

        // Verifica se a resposta foi bem-sucedida antes de converter
        if (!res.ok) {
          throw new Error("Erro ao carregar os dados");
        }

        const json = await res.json(); // [cite: 809, 903]
        setData(json); // Armazena os dados resgatados [cite: 810, 904]
        setError(null); // Limpa qualquer erro anterior
      } catch (error) {
        // REQUISITO: Tratamento de erros com catch [cite: 892, 905]
        console.error(error.message);
        setError("Houve um erro ao carregar os dados!"); // [cite: 906]
      } finally {
        setIsLoading(false); // Finaliza o estado de carregamento independente do resultado
      }
    };

    fetchData();
  }, [url]); // useEffect depende da URL [cite: 886, 910]

  // REQUISITO: Retornar os estados para uso no componente [cite: 890, 911]
  return { data, isLoading, error };
};

export default useFetch;