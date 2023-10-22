import { render, screen, fireEvent } from '@testing-library/react';
import CalendarNavigation from '../CalendarNavigation';

describe('CalendarNavigation', () => {
  it('renders the component with icons and handles click events', () => {
    const handleWeekChange = vi.fn();
    
    render(<CalendarNavigation handleWeekChange={handleWeekChange} />);
    
    const backIcon = screen.getByAltText('back');
    const forwardIcon = screen.getByAltText('forward');
    
    expect(backIcon).toBeInTheDocument();
    expect(forwardIcon).toBeInTheDocument();

    fireEvent.click(backIcon);
    expect(handleWeekChange).toHaveBeenCalledWith('prev');

    fireEvent.click(forwardIcon);
    expect(handleWeekChange).toHaveBeenCalledWith('next');
  });
});