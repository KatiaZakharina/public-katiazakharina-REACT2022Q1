import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithRouter } from 'test/__mocks__/renders';
import { fakeToursData } from './__mock__/fakeToursData';
import { CardList } from './CardList';

describe('CardList', () => {
  it('renders Cards', () => {
    renderWithRouter(<CardList data={fakeToursData} />);
    expect(screen.getAllByTestId('tour_card')).toHaveLength(fakeToursData.length);
  });

  it('does not have a modal open by default', () => {
    renderWithRouter(<CardList data={fakeToursData} />);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
