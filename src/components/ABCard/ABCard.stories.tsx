import { Story } from '@storybook/react/types-6-0';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { ABCard, CardProp } from '.';

export default {
  title: 'Componentes/ABCard',
  component: ABCard,
} as ComponentMeta<typeof ABCard>;

export const CardComponent: Story<CardProp> = args => {
  return <ABCard {...args} />;
};

CardComponent.args = {
  title: 'Liderança em Design',
  description: 'Habilidades de gestão para alavancar sua carreira',
  author: 'Vitor Zanini',
  amount: 29.9,
};
