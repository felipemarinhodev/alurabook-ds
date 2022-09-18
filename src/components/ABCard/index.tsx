import React from 'react';
import { ABBotao } from '../ABBotao';
import * as S from './styles';

// import bag from './images/Vector.png';
// import like from './images/Vector-2.png';

export type CardProp = {
  title: string;
  description: string;
  author: string;
  amount: number;
};

export function ABCard({ title, description, author, amount }: CardProp) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.About>Sobre o livro</S.About>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Author>Por: {author}</S.Author>
        <S.Price>
          <S.From>A partir de:</S.From>
          <S.Amount>R$ {amount}</S.Amount>
        </S.Price>
      </S.Content>
      <S.ActionContent>
        <div>
          <img src="./images/Vector.png" alt="image of a bag" />
          <img src="./images/Vector-2.png" alt="image of a heart" />
        </div>
        <ABBotao>Comprar!</ABBotao>
      </S.ActionContent>
    </S.Wrapper>
  );
}
