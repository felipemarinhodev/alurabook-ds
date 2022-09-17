import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ABBotao, BotaoProps } from '.';

export default {
  title: 'Componentes/ABBotao',
  args: {
    children: 'Label',
  },
  component: ABBotao,
} as ComponentMeta<typeof ABBotao>;

const Template: ComponentStory<typeof ABBotao> = args => <ABBotao {...args} />;

export const Primario = Template.bind({});

export const Secundario = Template.bind({});

Primario.args = {} as BotaoProps;

Secundario.args = {
  tipo: 'secundario',
} as BotaoProps;
