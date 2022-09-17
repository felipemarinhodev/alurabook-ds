import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background: #eb9b00;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`;

type BotaoProps = {
  children: React.ReactNode;
};

export function ABBotao({ children }: BotaoProps) {
  return <BotaoEstilizado>{children}</BotaoEstilizado>;
}
