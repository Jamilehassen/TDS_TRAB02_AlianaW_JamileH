import useFetch from '../hooks/useFetch';
import MenuItem from './MenuItem';
import MoquecaImage from '../assets/Moqueca.jpg';
import MignonImage from '../assets/Mignon.jpg';
import SaladaImage from '../assets/Salada.jpg';


/**
 * Mapeamento das imagens pelos nomes dos pratos (para fácil atribuição)
 */
const dishImages = {
  'Moqueca de Camarão': MoquecaImage,
  'Filé Mignon ao Molho Madeira': MignonImage,
  'Salada Vegana com Quinoa': SaladaImage,
};


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
      <div className="menu-grid">
        {menuItems && menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            imageSrc={dishImages[item.name]} 
            onAdd={onAddItem} 
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;