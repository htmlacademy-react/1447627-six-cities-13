import {render, screen} from '@testing-library/react';
import StarRating from './star-rating';

describe('Component: StarRating', () => {
  it('should render correctly', () => {
    const expectedStarsCount = 5;
    const starRatingTestId = 'starRatingElement';
    const starRatingItemTestId = 'starRatingItemElement';
    const mockHandleChange = vi.fn();

    render(<StarRating value={0} onChange={mockHandleChange} />);
    const starRating = screen.getByTestId(starRatingTestId);
    const starRatingItems = screen.getAllByTestId(starRatingItemTestId);

    expect(starRating).toBeInTheDocument();
    expect(starRatingItems.length).toBe(expectedStarsCount);
  });
});
