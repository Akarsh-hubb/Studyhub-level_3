import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const sampleLinks = [
  { href: '#', label: 'Home', active: true },
  { href: '#', label: 'Dashboard', active: false },
  { href: '#', label: 'Profile', active: false },
];

// State 1: Guest Navbar (Logged Out)
export const Guest: Story = {
  args: {
    brand: <a href="/">📚 StudyHub</a>,
    links: [
      { href: '#', label: 'Home', active: true },
    ],
    rightContent: (
      <>
        <Button variant="secondary" size="sm">Login</Button>
        <Button variant="primary" size="sm">Register</Button>
      </>
    ),
    ariaLabel: 'Guest Navigation Header',
  },
};

// State 2: Member Navbar (Logged In)
export const Member: Story = {
  args: {
    brand: <a href="/">📚 StudyHub</a>,
    links: sampleLinks,
    rightContent: (
      <>
        <span style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem' }}>Alex Smith</span>
        <Button variant="danger" size="sm">Logout</Button>
      </>
    ),
    ariaLabel: 'Member Dashboard Navigation',
  },
};

// State 3: Simple Header Navbar
export const Simple: Story = {
  args: {
    brand: <a href="/">📚 StudyHub</a>,
    links: [
      { href: '#', label: 'Privacy Policy', active: false },
      { href: '#', label: 'Terms of Service', active: false },
    ],
    ariaLabel: 'Footer Legal Navigation',
  },
};
