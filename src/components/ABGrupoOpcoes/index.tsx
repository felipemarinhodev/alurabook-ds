import React from 'react';
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

export interface ABGrupoOpcoesProps {
  selecionado: boolean;
}

export const ABGrupoOpcoes = ({ selecionado = false }: ABGrupoOpcoesProps) => {
  return (
    <Section selecionado={selecionado}>
      <header>E-book</header>
      <div>
        <strong>R$ 00,00</strong>
      </div>
      <footer>.pdf, .epub, .mob</footer>
    </Section>
  );
};
