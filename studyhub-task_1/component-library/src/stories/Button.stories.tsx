import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// State 1: Default (Primary)
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

// State 2: Disabled
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

// State 3: Secondary Variant
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
};

// State 4: Danger Link
export const DangerLink: Story = {
  args: {
    children: 'Danger Link Button',
    variant: 'danger',
    size: 'md',
    href: 'https://github.com',
    disabled: false,
  },
};
