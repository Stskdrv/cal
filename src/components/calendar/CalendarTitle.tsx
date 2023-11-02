import { memo } from 'react';
import { addDateBy } from '../../utils';
import { StyledTitle } from './calendar.style';

const CalendarTitle = memo(({ mondayDate }: { mondayDate: Date }) => {
    return (
        <StyledTitle>
            <h4 data-testid='from'>From: {mondayDate?.toDateString()}</h4>
            <h4 data-testid='today'>Today: {new Date().toDateString()}</h4>
            <h4 data-testid='to'>To: {addDateBy(mondayDate, 6).toDateString()}</h4>
        </StyledTitle>
    );
});

export default CalendarTitle;