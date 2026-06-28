import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    tag: {
      control: 'select',
      options: ['article', 'section'],
    },
    border: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// State 1: Default shadow card
export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is the card subtitle or description',
    tag: 'article',
    border: false,
    children: <p style={{ margin: 0 }}>This is the main body content of the card component. It stretches to fit whatever children are inside it.</p>,
  },
};

// State 2: Bordered card
export const Bordered: Story = {
  args: {
    title: 'Bordered Card Title',
    subtitle: 'This variant renders a border instead of elevation shadows',
    tag: 'section',
    border: true,
    children: <p style={{ margin: 0 }}>Sections can be used instead of articles for semantic document structures.</p>,
  },
};

// State 3: Card with actions
export const WithActions: Story = {
  args: {
    title: 'Action Card',
    subtitle: 'Contains footer actions buttons',
    tag: 'article',
    border: false,
    children: <p style={{ margin: 0 }}>This card contains primary and secondary call-to-actions at the bottom.</p>,
    actions: (
      <>
        <Button variant="primary" size="sm">Accept</Button>
        <Button variant="secondary" size="sm">Cancel</Button>
      </>
    ),
  },
};
