export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
  },
  borderRadius: '8px',
  spacing: (factor: number) => `${0.5 * factor}rem`,
  direction: 'rtl' as const,
};

export type Theme = typeof theme;
