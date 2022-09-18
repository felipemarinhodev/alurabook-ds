import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ABGrupoOpcoes } from '.';

export default {
  title: 'Componentes/ABGrupoOpcoes',
  component: ABGrupoOpcoes,
} as ComponentMeta<typeof ABGrupoOpcoes>;

const Template: ComponentStory<typeof ABGrupoOpcoes> = () => <ABGrupoOpcoes />;

export const Padrao = Template.bind({});
