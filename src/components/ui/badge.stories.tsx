import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

/**
 * Badge component with Claude-inspired color variants.
 *
 * Small labels for categorizing and highlighting content.
 */
const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'outline', 'neutral'],
      description: 'The visual variant of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge with primary color
 */
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

/**
 * Secondary badge
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

/**
 * Success badge
 */
export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

/**
 * Warning badge
 */
export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

/**
 * Error variant badge
 */
export const ErrorVariant: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

/**
 * Outline badge
 */
export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

/**
 * Neutral badge
 */
export const Neutral: Story = {
  args: {
    children: 'Neutral',
    variant: 'neutral',
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

/**
 * Status badges
 */
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-neutral-700 text-sm w-24">Active:</span>
        <Badge variant="success">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-700 text-sm w-24">Pending:</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-700 text-sm w-24">Inactive:</span>
        <Badge variant="neutral">Inactive</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-700 text-sm w-24">Error:</span>
        <Badge variant="error">Error</Badge>
      </div>
    </div>
  ),
};

/**
 * Notification badges
 */
export const NotificationBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-neutral-900">Messages</span>
        <Badge variant="default">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-900">Notifications</span>
        <Badge variant="error">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-900">Updates</span>
        <Badge variant="success">New</Badge>
      </div>
    </div>
  ),
};

/**
 * Category tags
 */
export const CategoryTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">React</Badge>
      <Badge variant="outline">TypeScript</Badge>
      <Badge variant="outline">Tailwind CSS</Badge>
      <Badge variant="outline">Storybook</Badge>
      <Badge variant="outline">Design System</Badge>
    </div>
  ),
};

/**
 * Product labels
 */
export const ProductLabels: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">New</Badge>
      <Badge variant="success">In Stock</Badge>
      <Badge variant="warning">Low Stock</Badge>
      <Badge variant="error">Out of Stock</Badge>
      <Badge variant="secondary">Sale</Badge>
    </div>
  ),
};

/**
 * Different sizes (using custom className)
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge className="text-[10px] px-2 py-0.5">Small</Badge>
      <Badge className="text-xs px-2.5 py-0.5">Default</Badge>
      <Badge className="text-sm px-3 py-1">Large</Badge>
    </div>
  ),
};

/**
 * With icons (using emoji as example)
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" className="gap-1">
        <span>✓</span>
        Verified
      </Badge>
      <Badge variant="warning" className="gap-1">
        <span>⚠</span>
        Warning
      </Badge>
      <Badge variant="error" className="gap-1">
        <span>✕</span>
        Error
      </Badge>
      <Badge variant="default" className="gap-1">
        <span>★</span>
        Featured
      </Badge>
    </div>
  ),
};
