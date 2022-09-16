import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ABBotao } from '.';

export default {
  title: 'Componentes/ABBotao',
  component: ABBotao,
} as ComponentMeta<typeof ABBotao>;

const Template: ComponentStory<typeof ABBotao> = () => <ABBotao />;

export const Primario = Template.bind({});
