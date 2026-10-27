import React, { useState } from 'react';
import CadastroCandidatura from '../Cadastro/CadastroCandidatura'; //

export function ComponenteVagas() {
  const [modalAberto, setModalAberto] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);

  const handleCandidatarClick = (vaga) => {
    setVagaSelecionada(vaga);
    setModalAberto(true);
  };

  return (
    <div>
      {}
      <button 
        className="btn-candidatar"
        onClick={() => handleCandidatarClick({ titulo: 'Atendente de Suporte e Ouvidoria' })}
      >
        Candidatar em 1 Clique
      </button>

      {}
      {modalAberto && (
        <CadastroCandidatura 
          vaga={vagaSelecionada} 
          onClose={() => setModalAberto(false)} 
        />
      )}
    </div>
  );
}