import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;

  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#ffffff'};
  border: 1px solid;
  border-color: ${props => (props.selecionado ? '#002F52' : '#eb9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selecionado ? '#FFFFFF' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${props => (props.selecionado ? '#FFFFFF' : '#eb9b00')};
    font-weight: 700;
    font-size: 16px;
  }

  footer {
    color: ${props => (props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)')};
    font-weight: 400;
    font-size: 12px;
  }
`;

export interface ABGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface ABGrupoOpcoesProps {
  opcoes: ABGrupoOpcao[];
}

export const ABGrupoOpcoes = ({ opcoes }: ABGrupoOpcoesProps) => {
  const [selecionado, setSelecionado] = useState<ABGrupoOpcao | null>(null);

  const handleSelect = (opcao: ABGrupoOpcao): void => {
    setSelecionado(opcao);
  };

  return (
    <>
      {opcoes.map(opcao => (
        <Section
          selecionado={selecionado?.id === opcao.id}
          key={opcao.id}
          onClick={() => handleSelect(opcao)}
        >
          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </Section>
      ))}
    </>
  );
};
