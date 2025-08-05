import '@emotion/react';
import { Theme as AppTheme } from '../theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

declare module 'react' {
  interface DOMAttributes {
    css?: import('@emotion/react').Interpolation<
      import('@emotion/react').Theme
    >;
  }
}
