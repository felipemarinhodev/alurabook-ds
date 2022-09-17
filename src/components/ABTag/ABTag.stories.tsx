import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ComponentMeta } from '@storybook/react';
import { ABTag, TagProps } from '.';

export default {
  title: 'Componentes/ABTag',
  component: ABTag,
  args: {
    tags: [
      'Android',
      'OO',
      'Marketing Digital',
      'Agile',
      'Startups',
      'HTML & CSS',
      'Java',
      'Python',
    ],
  },
} as ComponentMeta<typeof ABTag>;

export const TagComponent: Story<TagProps> = args => {
  return <ABTag {...args} />;
};
