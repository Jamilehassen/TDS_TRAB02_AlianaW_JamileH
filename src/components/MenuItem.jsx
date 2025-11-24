import styles from '../styles/MenuItem.module.css';
// Importa Imagem: Assumindo que a imagem está em /public (opção 1 das aulas) [cite: 20, 319]
const placeholderImage = '/dish_placeholder.jpg'; 

/**
 * Componente Reutilizável para um único prato.
 * @param {{
 * item: object, // Propriedade Comum (Objeto) [cite: 22]
 * onAdd: function // Propriedade Função [cite: 22, 576]
 * }} props 
 */
function MenuItem({ item, onAdd }) {
  // Desestruturação de Props para fácil acesso [cite: 509, 513]
  const { name, description, price, isSpecial } = item; 
  
  // Executar Código JavaScript no JSX: formatação de preço [cite: 16, 260]
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  // Interpolação de Objeto (price, name, description) [cite: 17]

  return (
    <div className={styles.itemCard}>
      <img src={placeholderImage} alt={name} style={{ width: '80px', height: '80px' }} />
      <div>
        <h3>{name}</h3>
        {/* Renderização Condicional: Se for especial [cite: 21, 442] */}
        {isSpecial && <span className={styles.specialBadge}>Especial!</span>}
        <p>{description}</p>
        <p>
          <strong>Preço:</strong> {formattedPrice} 
        </p>
        {/* Evento de Mouse: onClick [cite: 18, 280] */}
        <button 
          onClick={() => onAdd(name)}
          style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#e47d6a', color: 'white', border: 'none' }}
        >
          Pedir
        </button>
      </div>
    </div>
  );
}

export default MenuItem;