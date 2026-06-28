import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../components/FormField';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    autocomplete: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

// State 1: Default text input
export const Default: Story = {
  args: {
    label: 'Username',
    name: 'username',
    placeholder: 'Enter username',
    required: false,
    helperText: 'Username must be unique and alphanumeric.',
  },
};

// State 2: Required password input
export const RequiredPassword: Story = {
  args: {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter password',
    required: true,
  },
};

// State 3: Error validation input
export const ValidationError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'Enter email',
    value: 'invalid-email-address',
    error: 'Please enter a valid email address containing an @ symbol.',
    required: true,
  },
};
