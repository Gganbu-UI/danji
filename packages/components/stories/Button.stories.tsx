import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@danji/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Small: Story = {
  args: {
    size: 'sm',
    type: 'primary',
    variant: 'solid',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    ...Small.args,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Small.args,
    size: 'lg',
  },
};
