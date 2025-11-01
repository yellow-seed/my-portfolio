import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

/**
 * Input component with Claude-inspired styling.
 *
 * Text input field with focus states using the primary color.
 */
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

/**
 * Email input
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

/**
 * Password input
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

/**
 * Number input
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

/**
 * Search input
 */
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

/**
 * Disabled input
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

/**
 * Input with value
 */
export const WithValue: Story = {
  args: {
    value: 'Hello World',
    readOnly: true,
  },
};

/**
 * Form example with labels
 */
export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-neutral-900">Name</label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-neutral-900">Email</label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-neutral-900">Password</label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
};

/**
 * Input with error state
 */
export const WithError: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label className="text-sm font-medium text-neutral-900">Email</label>
      <Input
        type="email"
        placeholder="john@example.com"
        className="border-error-500 focus-visible:ring-error-500"
      />
      <p className="text-sm text-error-600">Please enter a valid email address</p>
    </div>
  ),
};

/**
 * Input with success state
 */
export const WithSuccess: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label className="text-sm font-medium text-neutral-900">Username</label>
      <Input
        placeholder="johndoe"
        value="johndoe"
        className="border-success-500 focus-visible:ring-success-500"
      />
      <p className="text-sm text-success-600">Username is available</p>
    </div>
  ),
};

/**
 * Different sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Input
        placeholder="Small input"
        className="h-8 text-xs"
      />
      <Input
        placeholder="Default input (h-10)"
      />
      <Input
        placeholder="Large input"
        className="h-12 text-base"
      />
    </div>
  ),
};
