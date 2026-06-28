import { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../components/FormField';

declare const meta: Meta<typeof FormField>;
export default meta;
type Story = StoryObj<typeof FormField>;
export declare const Default: Story;
export declare const RequiredPassword: Story;
export declare const ValidationError: Story;
