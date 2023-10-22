import { render, screen } from '@testing-library/react';
import CalendarTitle from '../CalendarTitle';

describe('CalendarTitle Component', () => {
   it('should display "From:", "Today:", and "To:" on the screen', () => {
      const mondayDate = new Date('2023-10-32T00:01:00.000Z');
      render(<CalendarTitle mondayDate={mondayDate} />);

      expect(screen.getByTestId('from')).toBeInTheDocument();
      expect(screen.getByTestId('today')).toBeInTheDocument();
      expect(screen.getByTestId('to')).toBeInTheDocument();
   });

   it('should display valid date for "From:", "Today:", and "To:" fields', () => {
      const mondayDate = new Date('2023-10-23T00:01:00.000Z');
      render(<CalendarTitle mondayDate={mondayDate} />);

      expect(screen.getByTestId('from')).toHaveTextContent('Mon Oct 23 2023');
      expect(screen.getByTestId('today')).toHaveTextContent('Mon Oct 23 2023');
      expect(screen.getByTestId('to')).toHaveTextContent('Sun Oct 29 2023');
   });

});
