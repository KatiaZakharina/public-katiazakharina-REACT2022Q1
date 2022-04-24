import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { AppContextProvider } from 'AppContextProvider';

export const renderWithContext = (ui: ReactNode) => {
  return render(<AppContextProvider>{ui}</AppContextProvider>);
};
