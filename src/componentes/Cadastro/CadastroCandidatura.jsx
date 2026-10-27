import React, { useState } from 'react';
import './CadastroCandidatura.scss';

export default function CadastroCandidatura({ vaga, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNascimento: '',
    tipoDeficiencia: '',
    regiao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Candidatura realizada com sucesso!');
        if (onClose) onClose();
      } else {
        alert('Erro ao realizar a candidatura.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="candidatura-overlay">
      <div className="candidatura-modal">
        <h2>Candidatura Rápida</h2>
        {vaga && <p className="vaga-titulo"><strong>Vaga:</strong> {vaga.titulo}</p>}

        <form onSubmit={handleSubmit} className="candidatura-form">
          <div className="form-group">
            <label>Nome Completo:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo de Deficiência ou Debilitação:</label>
            <select
              name="tipoDeficiencia"
              value={formData.tipoDeficiencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Física">PCD Física</option>
              <option value="Visual">PCD Visual</option>
              <option value="Auditiva">PCD Auditiva</option>
              <option value="Neurodivergente">Neurodivergente</option>
              <option value="Sênior 50+">Sênior / Idoso (50+)</option>
              <option value="Outra">Outra / Debilitação Temporária</option>
            </select>
          </div>

          <div className="form-group">
            <label>Região onde mora:</label>
            <input
              type="text"
              name="regiao"
              placeholder="Ex: São Paulo - SP, Zona Sul"
              value={formData.regiao}
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-submit">
              Confirmar Candidatura
            </button>
            {onClose && (
              <button type="button" onClick={onClose} className="btn-cancel">
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}