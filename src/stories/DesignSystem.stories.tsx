import type { Meta, StoryObj } from '@storybook/react';

/**
 * # Claude-Inspired Design System
 *
 * This design system is inspired by Claude's warm and welcoming brand identity,
 * featuring a carefully crafted color palette that emphasizes approachability and clarity.
 *
 * ## Philosophy
 *
 * The color palette is built around three core principles:
 *
 * 1. **Warmth & Approachability**: Using orange and coral tones to create an inviting experience
 * 2. **Clarity & Hierarchy**: Neutral tones that provide clear visual hierarchy
 * 3. **Accessibility**: All color combinations meet WCAG 2.1 AA standards
 */
const meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ color, label }: { color: string; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className="w-20 h-20 rounded-lg shadow-md border border-neutral-200"
      style={{ backgroundColor: color }}
    />
    <span className="text-xs font-mono text-neutral-600">{label}</span>
    <span className="text-xs text-neutral-500">{color}</span>
  </div>
);

const ColorScale = ({
  title,
  colors,
}: {
  title: string;
  colors: { shade: string; hex: string }[];
}) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {colors.map(({ shade, hex }) => (
        <ColorSwatch key={shade} color={hex} label={shade} />
      ))}
    </div>
  </div>
);

/**
 * ## Color Palette
 *
 * ### Primary Colors
 * Claude's signature warm orange - perfect for call-to-action buttons, links, and brand elements.
 */
export const PrimaryColors: Story = {
  render: () => (
    <div className="p-8">
      <ColorScale
        title="Primary Colors"
        colors={[
          { shade: '50', hex: '#FFF8F5' },
          { shade: '100', hex: '#FFEDE5' },
          { shade: '200', hex: '#FFD6C2' },
          { shade: '300', hex: '#FFB899' },
          { shade: '400', hex: '#FF9B70' },
          { shade: '500', hex: '#F97316' },
          { shade: '600', hex: '#E86A13' },
          { shade: '700', hex: '#C85910' },
          { shade: '800', hex: '#A0470D' },
          { shade: '900', hex: '#7A350A' },
        ]}
      />
    </div>
  ),
};

/**
 * ### Secondary Colors
 * Soft coral and peach tones that complement the primary color beautifully.
 */
export const SecondaryColors: Story = {
  render: () => (
    <div className="p-8">
      <ColorScale
        title="Secondary Colors"
        colors={[
          { shade: '50', hex: '#FEF7F4' },
          { shade: '100', hex: '#FDEEE7' },
          { shade: '200', hex: '#FAD5C5' },
          { shade: '300', hex: '#F7BBA3' },
          { shade: '400', hex: '#F4A281' },
          { shade: '500', hex: '#E8825E' },
          { shade: '600', hex: '#D66B4A' },
          { shade: '700', hex: '#B85A3D' },
          { shade: '800', hex: '#944831' },
          { shade: '900', hex: '#703627' },
        ]}
      />
    </div>
  ),
};

/**
 * ### Neutral Colors
 * Warm grays that provide a solid foundation for text, borders, and backgrounds.
 */
export const NeutralColors: Story = {
  render: () => (
    <div className="p-8">
      <ColorScale
        title="Neutral Colors"
        colors={[
          { shade: '50', hex: '#FAFAF9' },
          { shade: '100', hex: '#F5F5F4' },
          { shade: '200', hex: '#E7E5E4' },
          { shade: '300', hex: '#D6D3D1' },
          { shade: '400', hex: '#A8A29E' },
          { shade: '500', hex: '#78716C' },
          { shade: '600', hex: '#57534E' },
          { shade: '700', hex: '#44403C' },
          { shade: '800', hex: '#292524' },
          { shade: '900', hex: '#1C1917' },
        ]}
      />
    </div>
  ),
};

/**
 * ### Accent Colors
 * Complementary blue tones for links and secondary actions.
 */
export const AccentColors: Story = {
  render: () => (
    <div className="p-8">
      <ColorScale
        title="Accent Colors"
        colors={[
          { shade: '50', hex: '#F0F9FF' },
          { shade: '100', hex: '#E0F2FE' },
          { shade: '200', hex: '#BAE6FD' },
          { shade: '300', hex: '#7DD3FC' },
          { shade: '400', hex: '#38BDF8' },
          { shade: '500', hex: '#0EA5E9' },
          { shade: '600', hex: '#0284C7' },
          { shade: '700', hex: '#0369A1' },
          { shade: '800', hex: '#075985' },
          { shade: '900', hex: '#0C4A6E' },
        ]}
      />
    </div>
  ),
};

/**
 * ### Semantic Colors
 * Colors for success, warning, and error states.
 */
export const SemanticColors: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <ColorScale
        title="Success (Green)"
        colors={[
          { shade: '500', hex: '#22C55E' },
          { shade: '600', hex: '#16A34A' },
        ]}
      />
      <ColorScale
        title="Warning (Amber)"
        colors={[
          { shade: '500', hex: '#F59E0B' },
          { shade: '600', hex: '#D97706' },
        ]}
      />
      <ColorScale
        title="Error (Red)"
        colors={[
          { shade: '500', hex: '#EF4444' },
          { shade: '600', hex: '#DC2626' },
        ]}
      />
    </div>
  ),
};

/**
 * ## All Colors
 * Complete overview of all color scales in the design system.
 */
export const AllColors: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          Claude Design System - Complete Color Palette
        </h2>
        <p className="text-neutral-600 mb-8">
          A comprehensive color system inspired by Claude's warm and welcoming brand identity.
        </p>
      </div>

      <ColorScale
        title="Primary Colors"
        colors={[
          { shade: '50', hex: '#FFF8F5' },
          { shade: '100', hex: '#FFEDE5' },
          { shade: '200', hex: '#FFD6C2' },
          { shade: '300', hex: '#FFB899' },
          { shade: '400', hex: '#FF9B70' },
          { shade: '500', hex: '#F97316' },
          { shade: '600', hex: '#E86A13' },
          { shade: '700', hex: '#C85910' },
          { shade: '800', hex: '#A0470D' },
          { shade: '900', hex: '#7A350A' },
        ]}
      />

      <ColorScale
        title="Secondary Colors"
        colors={[
          { shade: '50', hex: '#FEF7F4' },
          { shade: '100', hex: '#FDEEE7' },
          { shade: '200', hex: '#FAD5C5' },
          { shade: '300', hex: '#F7BBA3' },
          { shade: '400', hex: '#F4A281' },
          { shade: '500', hex: '#E8825E' },
          { shade: '600', hex: '#D66B4A' },
          { shade: '700', hex: '#B85A3D' },
          { shade: '800', hex: '#944831' },
          { shade: '900', hex: '#703627' },
        ]}
      />

      <ColorScale
        title="Neutral Colors"
        colors={[
          { shade: '50', hex: '#FAFAF9' },
          { shade: '100', hex: '#F5F5F4' },
          { shade: '200', hex: '#E7E5E4' },
          { shade: '300', hex: '#D6D3D1' },
          { shade: '400', hex: '#A8A29E' },
          { shade: '500', hex: '#78716C' },
          { shade: '600', hex: '#57534E' },
          { shade: '700', hex: '#44403C' },
          { shade: '800', hex: '#292524' },
          { shade: '900', hex: '#1C1917' },
        ]}
      />

      <ColorScale
        title="Accent Colors"
        colors={[
          { shade: '50', hex: '#F0F9FF' },
          { shade: '100', hex: '#E0F2FE' },
          { shade: '200', hex: '#BAE6FD' },
          { shade: '300', hex: '#7DD3FC' },
          { shade: '400', hex: '#38BDF8' },
          { shade: '500', hex: '#0EA5E9' },
          { shade: '600', hex: '#0284C7' },
          { shade: '700', hex: '#0369A1' },
          { shade: '800', hex: '#075985' },
          { shade: '900', hex: '#0C4A6E' },
        ]}
      />

      <div className="grid grid-cols-3 gap-8">
        <ColorScale
          title="Success"
          colors={[
            { shade: '500', hex: '#22C55E' },
            { shade: '600', hex: '#16A34A' },
          ]}
        />
        <ColorScale
          title="Warning"
          colors={[
            { shade: '500', hex: '#F59E0B' },
            { shade: '600', hex: '#D97706' },
          ]}
        />
        <ColorScale
          title="Error"
          colors={[
            { shade: '500', hex: '#EF4444' },
            { shade: '600', hex: '#DC2626' },
          ]}
        />
      </div>

      <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Usage Notes</h3>
        <ul className="list-disc list-inside space-y-2 text-neutral-700">
          <li>Use Tailwind classes: <code className="bg-white px-2 py-1 rounded">bg-primary-500</code>, <code className="bg-white px-2 py-1 rounded">text-neutral-900</code></li>
          <li>Or CSS variables: <code className="bg-white px-2 py-1 rounded">var(--color-primary-500)</code></li>
          <li>500 is the default shade for each color scale</li>
          <li>All colors are available in Tailwind and can be imported in TypeScript</li>
        </ul>
      </div>
    </div>
  ),
};
