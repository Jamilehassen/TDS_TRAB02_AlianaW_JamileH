function Cart({ cartItems, onRemoveItem }) {
  // ... (cálculos de total permanecem os mesmos)
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const formattedTotal = `R$ ${cartTotal.toFixed(2).replace('.', ',')}`;

  return (
    <section>
      <h3>Carrinho de Pedidos ({cartItems.length} itens)</h3>
      
      {cartItems.length === 0 ? (
        <p>O seu carrinho está vazio. Adicione um prato!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
            {/* Usa item.uniqueId para a key, conforme a adição em App.jsx */}
            {cartItems.map((item) => (
              <li key={item.uniqueId} style={{ 
                borderBottom: '1px dotted #ccc', 
                padding: '8px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center' 
              }}>
                
                <span style={{ color: '#333' }}> 
                    {item.name} - R$ {item.price.toFixed(2).replace('.', ',')}
                </span>
                
                <button 
                    onClick={() => onRemoveItem(item.uniqueId)} // Chama a função prop usando o uniqueId
                    style={{ 
                        backgroundColor: '#dc3545', 
                        color: 'white',
                        padding: '4px 8px',
                        fontSize: '0.75em',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Remover
                </button>
              </li>
            ))}
          </ul>
          {/* ... (Div Total permanece o mesmo) ... */}
          <div style={{ 
            fontWeight: 'bold', 
            marginTop: '15px', 
            borderTop: '2px solid #eeeeee', 
            paddingTop: '10px',
            textAlign: 'right',
            fontSize: '1.2em'
          }}>
            Total: {formattedTotal}
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;