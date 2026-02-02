// Recebe os dados do componente pai (App.jsx) via Props
function Header({ restaurantName, reservationCount }) {
  return (
    // Bootstrap para estilização de cabeçalho
    <header className="p-4 mb-4 border-bottom bg-white shadow-sm rounded">
      <div className="d-flex justify-content-between align-items-center">
        
        {/* Interpolar variável comum (String)*/}
        <h1 className="h2 m-0 text-danger fw-bold" style={{ letterSpacing: '1px' }}>
          {restaurantName}
        </h1>

        {/* Executar código Javascript no JSX */}
        <div className="badge rounded-pill bg-danger p-2 px-3">
          {/* Interpolar variável state (Number)*/}
          Reservas Ativas: {reservationCount}
        </div>
        
      </div>
    </header>
  );
}

export default Header;