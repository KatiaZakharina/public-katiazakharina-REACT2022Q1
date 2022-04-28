import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { customRender } from 'test/__mocks__/customRender';
import { fakeToursData } from './__mock__/fakeToursData';
import { CardList } from './CardList';

describe('CardList', () => {
  it('renders Cards', () => {
    customRender(<CardList data={fakeToursData} />);
    expect(screen.getAllByTestId('tour_card')).toHaveLength(fakeToursData.length);
  });

  it('does not have a modal open by default', () => {
    customRender(<CardList data={fakeToursData} />);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
