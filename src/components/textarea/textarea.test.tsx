import {render, screen} from '@testing-library/react';
import Textarea from './textarea';

describe('Component: Textarea', () => {
  it('should render correctly', () => {
    const textareaElementTestId = 'textareaElement';
    const expectedText = 'Rebiew text';
    const mockHandleChange = vi.fn();

    render(<Textarea value={expectedText} onChange={mockHandleChange} />);

    expect(screen.getByTestId(textareaElementTestId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

