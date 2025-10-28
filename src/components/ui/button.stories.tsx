import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

/**
 * Button component with Claude-inspired color palette.
 *
 * Uses the primary orange color as the default variant, with various sizes and states.
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button using Claude's signature orange color
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
};

/**
 * Secondary button with neutral colors
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

/**
 * Destructive button for dangerous actions
 */
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

/**
 * Outline button with primary color border
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

/**
 * Ghost button with minimal styling
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

/**
 * Link style button
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

/**
 * Small size button
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

/**
 * Large size button
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

/**
 * All sizes displayed together
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
