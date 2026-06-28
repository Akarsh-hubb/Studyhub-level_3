import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar';

declare const meta: Meta<typeof Navbar>;
export default meta;
type Story = StoryObj<typeof Navbar>;
export declare const Guest: Story;
export declare const Member: Story;
export declare const Simple: Story;
