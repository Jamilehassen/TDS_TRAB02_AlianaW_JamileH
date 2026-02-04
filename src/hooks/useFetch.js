import { useState, useEffect } from 'react';

// REQUISITO: Custom hook para realização de requisições 
export const useFetch = (url) => {
  // Estados para gerenciar os dados, o carregamento e possíveis erros
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // REQUISITO: Função assíncrona para busca de dados
    const fetchData = async () => {
      setIsLoading(true); // Inicia o estado de carregamento
      
      try {
        // REQUISITO: Uso da Fetch API
        const res = await fetch(url);

        // Verifica se a resposta foi bem-sucedida antes de converter
        if (!res.ok) {
          throw new Error("Erro ao carregar os dados");
        }

        const json = await res.json(); 
        setData(json); // Armazena os dados resgatados 
        setError(null); // Limpa qualquer erro anterior
      } catch (error) {
        // REQUISITO: Tratamento de erros com catch 
        console.error(error.message);
        setError("Houve um erro ao carregar os dados!"); 
      } finally {
        setIsLoading(false); // Finaliza o estado de carregamento independente do resultado
      }
    };

    fetchData();
  }, [url]); // useEffect depende da URL 

  // REQUISITO: Retornar os estados para uso no componente
  return { data, isLoading, error };
};

export default useFetch;