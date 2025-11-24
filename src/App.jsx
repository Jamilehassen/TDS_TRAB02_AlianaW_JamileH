import { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import Cart from './components/Cart'; // NOVO IMPORT
import useInitialCount from './hooks/useInitialCount'; 
import './App.css'; 

function App() {
  // Configuração da API para contagem inicial (GET)
  const initialReservationCountFromApi = useInitialCount('http://localhost:3000/reservations');

  // Requisito: useState para Variável Comum (number)
  const [reservationCount, setReservationCount] = useState(0); 
  const [lastReservationName, setLastReservationName] = useState('');
  
  // Requisito: useState para Array/Objeto (O CARRINHO)
  const [cartItems, setCartItems] = useState([]); 

  // Sincroniza o state interno com o valor inicial carregado da API
  useEffect(() => {
      if (initialReservationCountFromApi > reservationCount) {
          setReservationCount(initialReservationCountFromApi);
      }
  }, [initialReservationCountFromApi]);

  // FUNÇÃO PRINCIPAL: Adiciona o item (objeto) ao estado do carrinho
  // Requisito: useState com Array/Objeto e Previous State (para o array)
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      // Adiciona o item (Objeto) ao array
      { ...item, id: item.id + '-' + Date.now() } // Garante uma key única
    ]);
    console.log(`Item "${item.name}" adicionado ao carrinho.`);
  };

  const removeItemFromCart = (uniqueIdToRemove) => {
    setCartItems((prevItems) => {
        return prevItems.filter(item => item.uniqueId !== uniqueIdToRemove);
    });
    console.log(`Item removido do carrinho. ID: ${uniqueIdToRemove}`);
  };

  // Funções de Evento (continuam as mesmas)
  const handleReservationSubmit = (name) => {
    setReservationCount(prevCount => prevCount + 1); 
    setLastReservationName(name); 
  };
  
  // Esta função agora está obsoleta pois usaremos addItemToCart
  // const handleAddItem = (dishName) => { 
  //   console.log(`Item "${dishName}" adicionado ao pedido. (Simulando adição ao carrinho)`);
  // }
  
  // Interpolação de Variável Comum
  const feedbackMessage = lastReservationName 
    ? `✅ Última reserva: ${lastReservationName}. Total: ${reservationCount} reservas.`
    : `Total de reservas carregadas: ${reservationCount}.`; 

  return (
    <div className="restaurant-app">
      {/* Componente Header.jsx */}
      <Header 
        restaurantName="Sabor Divino" 
        reservationCount={reservationCount} 
      />

      <p style={{ margin: '15px 0', fontWeight: 'bold', color: reservationCount > 0 ? 'green' : 'gray' }}>
        {feedbackMessage}
      </p>
      
      <div className="divider"></div> {/* NOVO DIVIDER */}
      
      <div className="main-content-with-cart">
        {/* Componente Menu.jsx */}
        <div className="menu-container">
          <Menu onAddItem={addItemToCart} /> 
        </div>
        
        {/* Componentes Carrinho e Reserva na Sidebar */}
        <div className="sidebar">
            <Cart cartItems={cartItems} /> 
            <Cart onRemoveItem={removeItemFromCart} />
            <ReservationForm onReservationSubmit={handleReservationSubmit} /> 
        </div>

      </div>
      
      <p className="read-the-docs">
        Aliana Wakassugui e Jamile Hassen
      </p>
    </div>
  );
}

export default App;