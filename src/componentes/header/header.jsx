import React from 'react';
import { Briefcase, GraduationCap, Scale } from 'lucide-react';
import './header.scss';

export default function Header() {
  return (
    <header className="principal">
      <div className="container">
        <div className="marc">
          <h1>Inclusão<span>MAIS</span></h1>
          <p>Trabalho e Apoio para Idosos e PcDs</p>
        </div>
        <nav className="links">
          <a href="#vagas"><Briefcase size={18} /> Vagas de Emprego</a>
          <a href="#cursos"><GraduationCap size={18} /> Cursos Gratuitos</a>
          <a href="#direitos"><Scale size={18} /> Seus Direitos</a>
        </nav>
      </div>
    </header>
  );
}