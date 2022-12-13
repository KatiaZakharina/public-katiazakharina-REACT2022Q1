import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { AboutUs } from './AboutUs';

describe('AboutUs', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<AboutUs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
