/**
 * Componente que exibe os itens no carrinho e calcula o total.
 * @param {{ cartItems: Array, total: number }} props - Recebe o array do carrinho e o total.
 */
function Cart({ cartItems }) {
  // Requisito: Executar código JavaScript no JSX (Cálculo do Total)
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Formatação do total (Execução de JS no JSX)
  const formattedTotal = `R$ ${cartTotal.toFixed(2).replace('.', ',')}`;

  return (
    <section>
      <h3>Carrinho de Pedidos ({cartItems.length} itens)</h3>
      
      {/* Requisito: Renderização Condicional (Se o carrinho estiver vazio) */}
      {cartItems.length === 0 ? (
        <p>O seu carrinho está vazio. Adicione um prato!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
            {/* Requisito: Reuso de Componente através de Loop (simples li) */}
            {/* Requisito: Interpolação de Array (cartItems) */}
            {cartItems.map((item, index) => (
              <li key={item.id + '-' + index} style={{ borderBottom: '1px dotted #555', padding: '5px 0' }}>
                {item.name} - R$ {item.price.toFixed(2).replace('.', ',')}
              </li>
            ))}
          </ul>
          <div style={{ fontWeight: 'bold', marginTop: '15px', borderTop: '2px solid #555', paddingTop: '10px' }}>
            Total: {formattedTotal}
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;