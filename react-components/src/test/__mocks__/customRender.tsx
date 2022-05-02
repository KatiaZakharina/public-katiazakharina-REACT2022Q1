import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { configureAppStore } from 'store/store';

export const customRender = (ui: ReactNode, route?: string) => {
  const store = configureAppStore();

  return render(
    <MemoryRouter initialEntries={route ? [route] : undefined}>
      <Provider store={store}>{ui}</Provider>
    </MemoryRouter>
  );
};
