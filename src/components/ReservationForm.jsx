import { useState } from 'react';

function ReservationForm({ onReservationSubmit }) {
  // useState para Objeto para gerenciar todos os inputs
  const [formData, setFormData] = useState({
    name: '',       
    email: '',      
    phone: '',      
    guests: 1,      
    date: '',       
    time: '19:00',  
    acceptPromo: false, 
    comment: ''     
  });

  // NOVO ESTADO: Armazena o nome da última reserva confirmada (para o feedback local)
  const [confirmedName, setConfirmedName] = useState('');

  // useState para Classe CSS Dinâmica (Comum/Boolean)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const reservationsApiUrl = 'http://localhost:3000/reservations';

  // Evento de Formulário: onChange para todos os inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Evento de Formulário: onSubmit (com preventDefault)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Requisito: Executar código JavaScript no JSX (para logging e estado)
    const nameToConfirm = formData.name; // CAPTURA O NOME ANTES DA LIMPEZA
    
    // Desabilita o botão para evitar cliques duplicados durante o envio
    setIsSubmitted(true); 

    try {
      const res = await fetch(reservationsApiUrl, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData) 
      });

      if (!res.ok) {
         throw new Error('Falha ao reservar.');
      }

      // 1. ATUALIZA ESTADOS
      // Executa a função Prop no sucesso (Propriedade Função)
      onReservationSubmit(nameToConfirm); 
      
      // Armazena o nome capturado para o feedback local
      setConfirmedName(nameToConfirm);
      
      // 2. LIMPA O FORMULÁRIO (useState Objeto)
      setFormData({
        name: '', email: '', phone: '', guests: 1, date: '', time: '19:00', acceptPromo: false, comment: ''
      });

      // 3. REABILITA O BOTÃO APÓS UM PEQUENO DELAY (para nova submissão)
      // Uso de JS no JSX (setTimeout é código JavaScript)
      setTimeout(() => {
          setIsSubmitted(false);
          setConfirmedName(''); // Limpa o feedback após a reabilitação
      }, 3000); // 3 segundos para o usuário ler a confirmação

    } catch (error) {
      console.error('Erro ao enviar reserva:', error);
      alert('Erro ao processar reserva. Tente novamente.');
      setIsSubmitted(false); // Reabilita o botão em caso de erro
    }
  };

  // Evento de Teclado: onKeyDown (exemplo de evento diferente)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Tecla Enter pressionada. O formulário será enviado se o foco estiver no botão.');
    }
  };

  const buttonClassName = confirmedName ? 'btn-success' : 'btn-submit';
  
  // CSS Dinâmico Inline
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: confirmedName ? 'green' : '#a52a2a', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px'
  };

  return (
    <section>
      <h2>Reserve sua Mesa</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
        {/* ... Inputs do formulário aqui ... */}
        <label htmlFor="name">Nome Completo:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="phone">Telefone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required onKeyDown={handleKeyDown} />
        
        <label htmlFor="guests">Pessoas (1-10):</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" required />
        
        <label htmlFor="date">Data da Reserva:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        
        <label htmlFor="time">Horário:</label>
        <select id="time" name="time" value={formData.time} onChange={handleChange} required>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>

        <label htmlFor="comment">Observações:</label>
        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange}></textarea>

        <div>
          <input type="checkbox" id="acceptPromo" name="acceptPromo" checked={formData.acceptPromo} onChange={handleChange} />
          <label htmlFor="acceptPromo" style={{ marginLeft: '10px', display: 'inline' }}> Aceito receber promoções.</label>
        </div>
        
        {/* Botão agora desabilita quando a submissão está a ocorrer */}
        <button 
          type="submit" 
          className={buttonClassName} 
          style={buttonStyle}
          disabled={isSubmitted} 
        >
          {confirmedName ? 'Reserva Confirmada!' : (isSubmitted ? 'Enviando...' : 'Confirmar Reserva')}
        </button>
      </form>
      
      {/* O feedback local agora usa confirmedName */}
      {confirmedName && <p style={{ color: 'green', fontWeight: 'bold' }}>Obrigado, {confirmedName}! Sua reserva foi enviada.</p>}
    </section>
  );
}

export default ReservationForm;