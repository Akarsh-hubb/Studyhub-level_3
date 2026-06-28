import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';

declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
export declare const Bordered: Story;
export declare const WithActions: Story;
