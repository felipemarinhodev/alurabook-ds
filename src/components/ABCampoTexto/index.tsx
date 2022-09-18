import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type ABCampoTextoProps = {
  label: string;
  valorInicial: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function ABCampoTexto({
  label,
  valorInicial,
  name,
  ...props
}: ABCampoTextoProps) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input {...props} />
    </S.Wrapper>
  );
}
