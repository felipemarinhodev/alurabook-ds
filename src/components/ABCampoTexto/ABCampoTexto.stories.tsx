import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ABCampoTexto, ABCampoTextoProps } from '.';

export default {
  title: 'Componentes/ABCampoTexto',
  component: ABCampoTexto,
} as ComponentMeta<typeof ABCampoTexto>;

const Template: ComponentStory<typeof ABCampoTexto> = args => (
  <ABCampoTexto {...args} />
);

export const Padrao = Template.bind({});

Padrao.args = {
  label: 'E-mail',
  placeholder: 'seuemail@maneiro.com.br',
} as ABCampoTextoProps;
