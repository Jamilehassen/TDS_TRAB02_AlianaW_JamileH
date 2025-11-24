// src/components/Cart.jsx
import React from 'react'; // Importar React para JSX (boa prática)

function Cart({ cartItems, onRemoveItem }) {
  // Requisito: Executar código JavaScript no JSX (Cálculo do Total)
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // CORREÇÃO DO ERRO 1: Declaração de variável fora do return.
  const formattedTotal = `R$ ${cartTotal.toFixed(2).replace('.', ',')}`;

  return (
    <section>
      <h3>Carrinho de Pedidos ({cartItems.length} itens)</h3>
      
      {/* Requisito: Renderização Condicional */}
      {cartItems.length === 0 ? (
        <p>O seu carrinho está vazio. Adicione um prato!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
            {/* Requisito: Interpolação de Array e Reuso de Componente (simples li) */}
            {cartItems.map((item, index) => (
              <li key={item.uniqueId} style={{ 
                borderBottom: '1px dotted #ccc', 
                padding: '8px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center' 
              }}>
                
                <span style={{ color: '#333' }}> 
                    {/* CORREÇÃO DO ERRO 2: Removida a notação inválida de variável CSS em linha (Linha 33) */}
                    {item.name} - R$ {item.price.toFixed(2).replace('.', ',')}
                </span>
                
                {/* Botão de Remoção (Requisito: Evento de Mouse) */}
                <button 
                    onClick={() => onRemoveItem(item.uniqueId)} 
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
          <div style={{ 
            fontWeight: 'bold', 
            marginTop: '15px', 
            borderTop: '2px solid var(--border-color)', 
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