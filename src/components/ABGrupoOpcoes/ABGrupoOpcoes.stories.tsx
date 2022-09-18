import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ABGrupoOpcoes } from '.';

export default {
  title: 'Componentes/ABGrupoOpcoes',
  component: ABGrupoOpcoes,
} as ComponentMeta<typeof ABGrupoOpcoes>;

const Template: ComponentStory<typeof ABGrupoOpcoes> = args => (
  <ABGrupoOpcoes {...args} />
);

export const Padrao = Template.bind({});

export const Selecionado = Template.bind({});

Selecionado.args = {
  selecionado: true,
};
