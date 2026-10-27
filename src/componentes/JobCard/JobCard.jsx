import React, { useState } from 'react';
import CadastroCandidatura from '../Cadastro/CadastroCandidatura';
import './JobCard.scss';

export default function JobCard({ vaga }) {
  const [modalAberto, setModalAberto] = useState(false);

  if (!vaga) {
    return null;
  }

  return (
    <div className="job-card">
      <div className="job-header">
        <span className="badge-modalidade">{vaga.modalidade}</span>
      </div>

      <div className="job-content">
        <h3>{vaga.titulo}</h3>
        <p className="empresa">{vaga.empresa}</p>
        <p className="local">📍 {vaga.local}</p>

        {vaga.salario && (
          <div className="salario-box">
            <span className="salario-label">Remuneração estimada:</span>
            <span className="salario-valor">{vaga.salario}</span>
          </div>
        )}

        {vaga.descricao && (
          <p className="descricao">{vaga.descricao}</p>
        )}

        {/* Tags de acessibilidade e benefícios */}
        <div className="tags-container">
          <span className="tag">✓ Aceita Idosos 50+</span>
          <span className="tag">✓ Compatível com Leitor de Tela</span>
          <span className="tag">✓ Horário Flexível</span>
        </div>
      </div>

      <button 
        className="btn-candidatar"
        onClick={() => setModalAberto(true)}
      >
        Candidatar em 1 Clique
      </button>

      {modalAberto && (
        <CadastroCandidatura 
          vaga={vaga} 
          onClose={() => setModalAberto(false)} 
        />
      )}
    </div>
  );
}