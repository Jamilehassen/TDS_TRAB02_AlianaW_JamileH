import useFetch from '../hooks/useFetch';
import MenuItem from './MenuItem';

/**
 * Componente que lista os itens do menu usando o Custom Hook.
 */
function Menu({ onAddItem }) {
  // URL do endpoint do JSON Server na porta 3000 [cite: 786, 798]
  const menuApiUrl = 'http://localhost:3000/menu'; 
  
  // Custom Hook: Resgata os dados do menu (Array/Objeto State)
  const { data: menuItems, isLoading, error } = useFetch(menuApiUrl);

  // Renderização Condicional com base nos estados do Custom Hook [cite: 21, 436]
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
        {/* Reuso de Componente através de Loop (map) [cite: 23, 547] */}
        {/* Interpolação de Array (menuItems) [cite: 17] */}
        {menuItems && menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} // Propriedade Comum (Objeto)
            onAdd={onAddItem} // Propriedade Função
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;