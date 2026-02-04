import { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import Cart from './components/Cart'; 
import useInitialCount from './hooks/useInitialCount'; 
import './App.css'; 

function App() {
  const initialReservationCountFromApi = useInitialCount('http://localhost:3000/reservations');

  // useState: Variável Comum (Number) e Objeto/Array
  const [reservationCount, setReservationCount] = useState(0); 
  const [lastReservationName, setLastReservationName] = useState('');
  const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
      if (initialReservationCountFromApi > reservationCount) {
          setReservationCount(initialReservationCountFromApi);
      }
  }, [initialReservationCountFromApi]);

  // Função para adicionar item (Uso de Previous State) 
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { ...item, uniqueId: item.id + '-' + Date.now() } 
    ]);
  };

  const removeItemFromCart = (uniqueIdToRemove) => {
    setCartItems((prevItems) => prevItems.filter(item => item.uniqueId !== uniqueIdToRemove));
  };

  const handleReservationSubmit = (name) => {
    setReservationCount(prevCount => prevCount + 1); 
    setLastReservationName(name); 
  };
  
  // REQUISITO: Interpolar Array (Transformando array de objetos em lista de nomes)
  const listaNomesItens = cartItems.map(item => item.name).join(", ");

  return (
    // REQUISITO: Bootstrap (Classe 'container') 
    <div className="container mt-4 restaurant-app">
      
      {/* REQUISITO: Evento de Mouse (onMouseEnter)  */}
      <div onMouseEnter={() => console.log("Usuário navegando pelo cabeçalho")}>
        <Header 
          restaurantName="JALI" 
          reservationCount={reservationCount} 
        />
      </div>

      {/* CSS Dinâmico Inline baseado em condição*/}
      <p style={{ 
        margin: '15px 0', 
        fontWeight: 'bold', 
        color: reservationCount > 0 ? 'green' : 'gray' 
      }}>
        {lastReservationName 
          ? `Última reserva: ${lastReservationName}. Total: ${reservationCount}.`
          : `Total de reservas: ${reservationCount}.`}
      </p>

      {/* REQUISITO: Interpolar Array no JSX  */}
      {cartItems.length > 0 && (
        <div className="alert alert-secondary">
          <strong>Itens no pedido:</strong> {listaNomesItens}
        </div>
      )}
      
      <div className="row"> {/* Bootstrap Grid  */}
        <div className="col-md-8">
          <Menu onAddItem={addItemToCart} /> 
        </div>
        
        <div className="col-md-4 sidebar">
            {/* REQUISITO: Passar Variável de State como Prop  */}
            <Cart 
                cartItems={cartItems} 
                onRemoveItem={removeItemFromCart}
            />
            <ReservationForm onReservationSubmit={handleReservationSubmit} /> 
        </div>
      </div>
      
      <footer className="mt-5 py-3 text-center border-top">
        <p>Aliana Wakassugui e Jamile Hassen - Unioeste 2026</p>
      </footer>
    </div>
  );
}

export default App;