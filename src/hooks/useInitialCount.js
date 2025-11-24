import { useState, useEffect } from 'react';

/**
 * Custom Hook para buscar o número inicial de reservas na API.
 */
function useInitialCount(url) {
  const [initialCount, setInitialCount] = useState(0);
  
  // Requisito: useEffect e Fetch API para carregar dados iniciais
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // Requisito: Tratamento de Erro
          throw new Error('Falha ao buscar a contagem inicial.');
        }
        const data = await response.json();
        
        // Requisito: useState (number) para armazenar o tamanho do array
        // Usamos o .length para obter o número total de reservas
        setInitialCount(data.length); 
        
      } catch (error) {
        console.error("Erro no carregamento inicial da contagem:", error);
      }
    };

    fetchCount();
  }, [url]); // Dependência na URL
  
  return initialCount;
}

export default useInitialCount;