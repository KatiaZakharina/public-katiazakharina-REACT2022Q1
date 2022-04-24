import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { AppContextProvider } from 'AppContextProvider';

export const customRender = (ui: ReactNode, route?: string) => {
  return render(
    <MemoryRouter initialEntries={route ? [route] : undefined}>
      <AppContextProvider>{ui}</AppContextProvider>
    </MemoryRouter>
  );
};
