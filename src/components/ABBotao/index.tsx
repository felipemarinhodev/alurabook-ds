import React from 'react';
import styled, { css } from 'styled-components';

const BotaoEstilizado = styled.button<BotaoProps>`
  ${({ tipo }) => css`
    ${colorsModifiers[tipo!]()}
    padding: 16px 32px;
    font-size: 20px;
    cursor: pointer;
  `}
`;

const colorsModifiers = {
  primario: () => css`
    background: #eb9b00;
    border: 2px solid #eb9b00;
    color: white;

    &:hover {
      background: #b87900;
      border: 2px solid #b87900;
    }
  `,
  secundario: () => css`
    background: #fff;
    color: #eb9b00;
    border: 2px solid #eb9b00;

    &:hover {
      background: #fff;
      border: 2px solid #b87900;
      color: #b87900;
    }
  `,
};

export interface BotaoProps {
  children: React.ReactNode;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

export function ABBotao({ children, tipo = 'primario', onClick }: BotaoProps) {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {children}
    </BotaoEstilizado>
  );
}
