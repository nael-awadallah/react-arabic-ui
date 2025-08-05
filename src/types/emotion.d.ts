import '@emotion/react';
import { Theme as AppTheme } from '../theme'; // Adjust path if needed

// Augment @emotion/react with your custom theme
declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

// Optional: If you're still getting "css does not exist" errors
// → Augment JSX to allow `css` prop on all elements
declare module 'react' {
  interface DOMAttributes<T> {
    css?: import('@emotion/react').Interpolation<
      import('@emotion/react').Theme
    >;
  }
}
