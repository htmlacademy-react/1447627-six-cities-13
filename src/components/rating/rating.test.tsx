import {render, screen} from '@testing-library/react';
import Rating from './rating';

describe('Component: Rating', () => {
  it('should render correct', () => {
    const expectedValue = 3;
    const expectedText = /Rating/i;

    render(<Rating value={expectedValue} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedValue)).toBeInTheDocument();
  });
});
