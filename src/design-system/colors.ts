/**
 * Claude-inspired Design System
 *
 * This color palette is inspired by Claude's brand identity:
 * - Primary: Warm orange/coral tones
 * - Neutral: Soft grays and browns
 * - Accent: Complementary blues and purples
 *
 * Compatible with Figma's design tokens
 */

export const colors = {
  // Primary - Claude's signature warm orange/coral
  primary: {
    50: '#FFF8F5',
    100: '#FFEDE5',
    200: '#FFD6C2',
    300: '#FFB899',
    400: '#FF9B70',
    500: '#F97316', // Main Claude orange
    600: '#E86A13',
    700: '#C85910',
    800: '#A0470D',
    900: '#7A350A',
  },

  // Secondary - Soft coral/peach tones
  secondary: {
    50: '#FEF7F4',
    100: '#FDEEE7',
    200: '#FAD5C5',
    300: '#F7BBA3',
    400: '#F4A281',
    500: '#E8825E',
    600: '#D66B4A',
    700: '#B85A3D',
    800: '#944831',
    900: '#703627',
  },

  // Neutral - Warm grays inspired by Claude's interface
  neutral: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917',
  },

  // Accent - Complementary blue tones
  accent: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
  },

  // Success - Natural green
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },

  // Warning - Warm amber
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  // Error - Soft red
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },

  // Background - Soft warm tones
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAF9',
    tertiary: '#F5F5F4',
    elevated: '#FFFFFF',
  },

  // Text colors
  text: {
    primary: '#1C1917',
    secondary: '#57534E',
    tertiary: '#78716C',
    inverse: '#FFFFFF',
    link: '#F97316',
  },

  // Border colors
  border: {
    light: '#E7E5E4',
    default: '#D6D3D1',
    dark: '#A8A29E',
  },
} as const;

// Semantic color mappings for easier usage
export const semanticColors = {
  brand: colors.primary[500],
  brandHover: colors.primary[600],
  brandActive: colors.primary[700],

  background: colors.background.primary,
  backgroundSecondary: colors.background.secondary,

  text: colors.text.primary,
  textMuted: colors.text.secondary,

  border: colors.border.default,
  borderLight: colors.border.light,
} as const;

// Export type for TypeScript autocomplete
export type ColorPalette = typeof colors;
export type SemanticColors = typeof semanticColors;
