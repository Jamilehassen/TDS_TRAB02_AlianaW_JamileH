import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import './App.css'; // Estilo de componente não scoped [cite: 605]

function App() {
  // useState para Variável Comum (number e string) [cite: 21, 347]
  const [reservationCount, setReservationCount] = useState(0); 
  const [lastReservationName, setLastReservationName] = useState('');

  // Propriedade Função: passada para o formulário [cite: 22, 576]
  const handleReservationSubmit = (name) => {
    // Uso de Previous State para garantir o valor correto [cite: 410, 412]
    setReservationCount(prevCount => prevCount + 1); 
    setLastReservationName(name); 
  };

  const handleAddItem = (dishName) => {
    // Execução de código JS no JSX: log no console [cite: 16]
    console.log(`Item "${dishName}" adicionado ao pedido. (Simulando adição ao carrinho)`);
  }

  // Interpolação de Variável Comum (lastReservationName) [cite: 17]
  const feedbackMessage = lastReservationName 
    ? `✅ Última reserva: ${lastReservationName}. Total: ${reservationCount} reservas.`
    : 'Aguardando sua primeira reserva...';

  return (
    <div className="restaurant-app">
      {/* Componente Header.jsx */}
      <Header 
        restaurantName="Sabor Divino" // Propriedade Comum (string)
        reservationCount={reservationCount} // Propriedade State (number)
      />

      {/* Renderização Condicional: Exibe feedback [cite: 21, 442] */}
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