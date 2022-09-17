import React from 'react';
import { ABBotao } from '../ABBotao';
import * as S from './styles';

import bag from './images/Vector.png';
import like from './images/Vector-2.png';

export function ABCard() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.About>Sobre o livro</S.About>
        <S.Title>Liderança em Design</S.Title>
        <S.Description>
          Habilidades de gestão para alavancar sua carreira
        </S.Description>
        <S.Author>Por: Vitor Zanini </S.Author>
        <S.Price>
          <S.From>A partir de:</S.From>
          <S.Amount>R$ 29,90</S.Amount>
        </S.Price>
      </S.Content>
      <S.ActionContent>
        <div>
          <img src={bag} alt="image of a bag" />
          <img src={like} alt="image of a heart" />
        </div>
        <ABBotao />
      </S.ActionContent>
    </S.Wrapper>
  );
}
