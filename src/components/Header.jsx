/**
 * Componente do cabeçalho.
 * @param {{ restaurantName: string, reservationCount: number }} props
 */
function Header({ restaurantName, reservationCount }) {
  // Propriedade Comum (string) e Propriedade State (number) [cite: 22, 492]
  return (
    <header style={{ borderBottom: '2px solid #a52a2a', paddingBottom: '15px' }}>
      <h1>{restaurantName}</h1> 
      {/* Interpolação de Variável Comum (reservationCount) [cite: 17] */}
      <p>Reservas Confirmadas: 
        <strong> {reservationCount}</strong> 
      </p>
    </header>
  );
}

export default Header;