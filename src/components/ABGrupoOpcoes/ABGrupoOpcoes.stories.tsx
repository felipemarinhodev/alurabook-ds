import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ABGrupoOpcoes, ABGrupoOpcoesProps } from '.';

export default {
  title: 'Componentes/ABGrupoOpcoes',
  component: ABGrupoOpcoes,
} as ComponentMeta<typeof ABGrupoOpcoes>;

const Template: ComponentStory<typeof ABGrupoOpcoes> = args => (
  <ABGrupoOpcoes {...args} />
);

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
  ],
  valorPadrao: {
    id: 2,
    titulo: 'Impresso',
    corpo: 'R$ 00,00',
    rodape: '.pdf, .epub, .mob',
  },
} as ABGrupoOpcoesProps;
