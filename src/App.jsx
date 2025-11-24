import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import useInitialCount from './hooks/useInitialCount'; // NOVO IMPORT
import './App.css'; 

function App() {
  // 1. CHAMA O NOVO HOOK PARA BUSCAR O VALOR INICIAL
  const initialReservationCount = useInitialCount('http://localhost:3000/reservations');

  // 2. USA O VALOR DA API COMO ESTADO INICIAL
  // Se for maior que 0 (fetch bem-sucedido), usa esse valor, senão usa 0.
  const [reservationCount, setReservationCount] = useState(initialReservationCount); 
  
  // Requisito: useState para Variável Comum (string) - Feedback
  const [lastReservationName, setLastReservationName] = useState('');

  // Sincroniza o state interno com o valor inicial carregado da API
  // Requisito: useEffect para sincronização (só roda se initialReservationCount mudar)
  useEffect(() => {
      // Se o initialCount for carregado (e for > 0), define o estado do contador
      if (initialReservationCount > 0 && reservationCount === 0) {
          setReservationCount(initialReservationCount);
      }
  }, [initialReservationCount]);


  // Propriedade Função: passada para o formulário
  const handleReservationSubmit = (name) => {
    // Uso de Previous State para garantir o valor correto
    setReservationCount(prevCount => prevCount + 1); 
    setLastReservationName(name); 
  };
  
  // ... resto do código permanece o mesmo
  
  // Interpolação de Variável Comum (lastReservationName)
  const feedbackMessage = lastReservationName 
    ? `✅ Última reserva: ${lastReservationName}. Total: ${reservationCount} reservas.`
    : `Total de reservas carregadas: ${reservationCount}.`; // MENSAGEM AJUSTADA

  return (
    <div className="restaurant-app">
      {/* Componente Header.jsx */}
      <Header 
        restaurantName="Sabor Divino" // Propriedade Comum (string)
        reservationCount={reservationCount} // Propriedade State (number)
      />

      {/* Renderização Condicional: Exibe feedback */}
      <p style={{ margin: '15px 0', fontWeight: 'bold', color: reservationCount > 0 ? 'green' : 'gray' }}>
        {feedbackMessage}
      </p>

      <div className="main-content">
        {/* Componente Menu.jsx */}
        <Menu onAddItem={handleAddItem} />
        
        {/* Componente ReservationForm.jsx */}
        <ReservationForm onReservationSubmit={handleReservationSubmit} />
      </div>
      
      <p className="read-the-docs">
        Desenvolvido com React e Vite (TDS - UNIOESTE)
      </p>
    </div>
  );
}

export default App;