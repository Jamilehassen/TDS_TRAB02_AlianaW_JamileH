import { useState, useEffect } from 'react';

/**
 * Custom Hook para realizar requisições HTTP GET.
 * Implementa useEffect e Fetch API com tratamento de erros.
 * @param {string} url - O endpoint da API (ex: http://localhost:3000/menu).
 * @returns {{data: Array | null, isLoading: boolean, error: string | null}}
 */
function useFetch(url) {
  // useState para o array/objeto dos dados
  const [data, setData] = useState(null); 
  // useState para estado comum de carregamento
  const [isLoading, setIsLoading] = useState(true); 
  // useState para estado comum de erro (Tratamento de Erro)
  const [error, setError] = useState(null); 

  // useEffect para controle do ciclo de vida da requisição, ativado pelo URL
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Uso da Fetch API [cite: 32, 814]
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: status ${response.status}`);
        }
        
        // Transformando a resposta JSON em objeto JS
        const json = await response.json();
        
        // Atende ao useState (Array/Objeto)
        setData(json); 
      } catch (err) {
        // Tratamento de Erro
        setError('Erro ao carregar dados: ' + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // Array de dependências: recarrega se a URL mudar

  // Retorna os dados para serem usados no componente
  return { data, isLoading, error };
}

export default useFetch;