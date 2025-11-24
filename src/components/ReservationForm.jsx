import { useState } from 'react';

/**
 * Componente de formulário para reservas com 5+ tipos de input e requisição POST.
 */
function ReservationForm({ onReservationSubmit }) {
  // useState para Objeto para gerenciar todos os inputs [cite: 21]
  const [formData, setFormData] = useState({
    name: '',       // Input: text
    email: '',      // Input: email
    phone: '',      // Input: tel
    guests: 1,      // Input: number
    date: '',       // Input: date
    time: '19:00',  // Input: select
    acceptPromo: false, // Input: checkbox
    comment: ''     // Input: textarea
  });

  // useState para Classe CSS Dinâmica (Comum/Boolean) [cite: 25, 26]
  const [isSubmitted, setIsSubmitted] = useState(false);
  const reservationsApiUrl = 'http://localhost:3000/reservations';

  // Evento de Formulário: onChange para todos os inputs [cite: 18, 675]
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Manipulação de valores simplificada [cite: 681]
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Evento de Formulário: onSubmit (com preventDefault) [cite: 18, 695, 696]
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Simulação de Requisição POST (Adicionando dados) [cite: 29, 834]
    try {
      const res = await fetch(reservationsApiUrl, {
        method: "POST", // Método POST [cite: 858]
        headers: {
          "Content-Type": "application/json" // Cabeçalhos [cite: 861]
        },
        body: JSON.stringify(formData) // Corpo como JSON string [cite: 866]
      });

      if (!res.ok) {
         throw new Error('Falha ao reservar.');
      }

      // 2. Executa a função Prop no sucesso (Propriedade Função) [cite: 22, 576]
      onReservationSubmit(formData.name);
      
      // 3. Ativa o CSS Dinâmico
      setIsSubmitted(true);
      
      // 4. Resetar o formulário após o envio [cite: 740]
      setFormData({
        name: '', email: '', phone: '', guests: 1, date: '', time: '19:00', acceptPromo: false, comment: ''
      });

    } catch (error) {
      console.error('Erro ao enviar reserva:', error);
      alert('Erro ao processar reserva. Tente novamente.');
      setIsSubmitted(false);
    }
  };

  // Evento de Teclado: onKeyDown (exemplo de evento diferente) [cite: 18]
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Tecla Enter pressionada. O formulário será enviado se o foco estiver no botão.');
    }
  };

  // Requisito: Classe CSS Dinâmica [cite: 26, 624]
  const buttonClassName = isSubmitted ? 'btn-success' : 'btn-submit';
  
  // Requisito: CSS Dinâmico Inline [cite: 25, 617]
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: isSubmitted ? 'green' : '#a52a2a', 
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
        
        {/* Formulário: 5+ Tipos de Input (text, email, number, select, checkbox, tel, textarea) [cite: 24] */}
        
        {/* Controlled Input (value={formData.name}) [cite: 710, 713] */}
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

        {/* Requisito: Input Textarea [cite: 732] */}
        <label htmlFor="comment">Observações:</label>
        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange}></textarea>

        <div>
          <input type="checkbox" id="acceptPromo" name="acceptPromo" checked={formData.acceptPromo} onChange={handleChange} />
          <label htmlFor="acceptPromo" style={{ marginLeft: '10px', display: 'inline' }}> Aceito receber promoções.</label>
        </div>
        
        {/* Botão com Classe CSS Dinâmica e Estilo Dinâmico */}
        <button 
          type="submit" 
          className={buttonClassName} 
          style={buttonStyle}
          disabled={isSubmitted}
        >
          {/* Renderização Condicional (if ternário) [cite: 449] */}
          {isSubmitted ? 'Reserva Confirmada!' : 'Confirmar Reserva'}
        </button>
      </form>
      {/* Interpolação de Objeto (formData) e Variável Comum (isSubmitted) [cite: 17] */}
      {isSubmitted && <p style={{ color: 'green', fontWeight: 'bold' }}>Obrigado, {formData.name}! Sua reserva foi enviada.</p>}
    </section>
  );
}

export default ReservationForm;