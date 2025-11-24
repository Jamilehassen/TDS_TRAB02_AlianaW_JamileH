import styles from '../styles/MenuItem.module.css';
const placeholderImage = '/dish_placeholder.png'; 

function MenuItem({ item, onAdd }) {
  const { name, description, price, isSpecial } = item; 
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div className={styles.itemCard}>
      <img src={placeholderImage} alt={name} style={{ width: '80px', height: '80px' }} />
      <div>
        <h3>{name}</h3>
        {isSpecial && <span className={styles.specialBadge}>Especial!</span>}
        <p>{description}</p>
        <p>
          <strong>Preço:</strong> {formattedPrice} 
        </p>
        {/* Evento: onClick (Mouse) - Passa o OBJETO COMPLETO 'item' */}
        <button 
          onClick={() => onAdd(item)} // <--- MUDANÇA AQUI: Passa o objeto 'item'
          style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#e47d6a', color: 'white', border: 'none' }}
        >
          Pedir
        </button>
      </div>
    </div>
  );
}

export default MenuItem;