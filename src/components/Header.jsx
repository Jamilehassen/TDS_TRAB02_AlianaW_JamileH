// src/components/Header.jsx

function Header({ restaurantName, reservationCount }) {
  return (
    // Usa a classe 'navbar' para estilização centralizada no CSS
    <div className="navbar"> 
      <header className="header-content">
        <h1>{restaurantName}</h1> 
        <div className="reservation-status">
          {/* A contagem não faz parte do navbar principal, mas é um status */}
          <p>Reservas Confirmadas: 
            <strong> {reservationCount}</strong> 
          </p>
        </div>
      </header>
      {/* Esta linha (divider) ajuda na separação visual da faixa */}
      <div className="header-divider"></div> 
    </div>
  );
}

export default Header;