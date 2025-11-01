import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';

/**
 * Card component with Claude-inspired styling.
 *
 * A flexible container with header, content, and footer sections.
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic card with header and content
 */
export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600">
          This is the main content of the card. It can contain any content you want.
        </p>
      </CardContent>
    </Card>
  ),
};

/**
 * Card with footer actions
 */
export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Fill in the details to create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600">
          Your account will be created with the default settings.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Card with hover effect
 */
export const Hoverable: Story = {
  render: () => (
    <Card className="w-[350px] border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover over this card to see the effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600">
          This card changes its border and shadow on hover.
        </p>
      </CardContent>
    </Card>
  ),
};

/**
 * Feature card with icon
 */
export const FeatureCard: Story = {
  render: () => (
    <Card className="w-[350px] border-neutral-200">
      <CardHeader>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-2xl">🎨</div>
        </div>
        <CardTitle>Design System</CardTitle>
        <CardDescription>Claude-inspired color palette</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600">
          A comprehensive design system with warm, welcoming colors inspired by Claude's brand identity.
        </p>
      </CardContent>
    </Card>
  ),
};

/**
 * Product card
 */
export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px] border-neutral-200 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100" />
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription className="text-primary-600 font-semibold text-lg">$99.00</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600 text-sm">
          High-quality product with excellent features and outstanding performance.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Stats card
 */
export const StatsCard: Story = {
  render: () => (
    <Card className="w-[250px] border-neutral-200">
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-2">
          <span className="text-neutral-500 text-sm">Total Users</span>
          <span className="text-4xl font-bold text-neutral-900">12,543</span>
          <span className="text-success-600 text-sm">↑ 12% from last month</span>
        </div>
      </CardContent>
    </Card>
  ),
};

/**
 * Multiple cards in a grid
 */
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card className="border-neutral-200">
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>First card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 text-sm">Content for the first card</p>
        </CardContent>
      </Card>
      <Card className="border-neutral-200">
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Second card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 text-sm">Content for the second card</p>
        </CardContent>
      </Card>
      <Card className="border-neutral-200">
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>Third card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 text-sm">Content for the third card</p>
        </CardContent>
      </Card>
      <Card className="border-neutral-200">
        <CardHeader>
          <CardTitle>Card 4</CardTitle>
          <CardDescription>Fourth card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 text-sm">Content for the fourth card</p>
        </CardContent>
      </Card>
    </div>
  ),
};
