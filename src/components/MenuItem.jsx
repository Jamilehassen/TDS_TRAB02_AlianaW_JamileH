import styles from '../styles/MenuItem.module.css';

// Modifique a desestruturação de props para incluir imageSrc
function MenuItem({ item, onAdd, imageSrc }) { 
  const { name, description, price, isSpecial } = item; 
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div className={styles.itemCard}>
      <img src={imageSrc} alt={name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
      
      <div className={styles.itemInfo}>
        <h3>{name}</h3>
        {isSpecial && <span className={styles.specialBadge}>Especial!</span>}
        <p style={{ color: '#666', fontSize: '0.9em' }}>{description}</p>
        <p>
          <strong>Preço:</strong> {formattedPrice} 
        </p>
        <button onClick={() => onAdd(item)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default MenuItem;