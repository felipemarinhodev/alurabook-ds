import React from 'react';
import * as S from './styles';

export interface TagProps {
  tags: string[];
}

export function ABTag({ tags }: TagProps) {
  return (
    <S.Wrapper>
      {tags.map(tag => (
        <S.Tag>{tag}</S.Tag>
      ))}
    </S.Wrapper>
  );
}
