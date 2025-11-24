// src/components/Menu.jsx
import useFetch from '../hooks/useFetch';
import MenuItem from './MenuItem';

/**
 * Componente que exibe a lista completa do menu, usando o Custom Hook.
 */
function Menu({ onAddItem }) {
  const menuApiUrl = 'http://localhost:3000/menu'; 
  const { data: menuItems, isLoading, error } = useFetch(menuApiUrl);

  if (isLoading) {
    return <p>Carregando Menu... ⏳</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Erro ao carregar o menu: {error}</p>;
  }

  return (
    <section>
      <h2>Nosso Menu</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {menuItems && menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} // Propriedade Comum (Objeto)
            onAdd={onAddItem} // Propriedade Função (Função que adiciona ao carrinho)
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;