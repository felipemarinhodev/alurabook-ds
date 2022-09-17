import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { ABCard } from '.';

export default {
  title: 'Componentes/ABCard',
  component: ABCard,
} as ComponentMeta<typeof ABCard>;

export const CardComponent = () => {
  return <ABCard />;
};
