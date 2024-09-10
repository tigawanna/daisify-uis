import { createContext } from 'react';
import { DaisyUIThemeSearchParmsTypes } from '../utils/schema';

interface DaisyUiContextTypes {
  theme: DaisyUIThemeSearchParmsTypes;  
  updateTheme: (items_key: string, new_items: string) => void;
  updateLockedTheme: (items_key: string, is_locked: boolean) => void;
}
export function createDaisyUiContext({
    theme,
  updateTheme,
  updateLockedTheme}: DaisyUiContextTypes) {
    const DaisyUIThemeContext = createContext({
      theme,
      updateTheme,
      updateLockedTheme
    });
    return DaisyUIThemeContext;
}
