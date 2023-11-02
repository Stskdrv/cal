import { StyledIcon, StyledWeekNavigation } from "./calendar.style";
import backIcon from '../../assets/icons/back_nav.png';
import forvardIcon from '../../assets/icons/front_nav.png';
import { memo } from "react";


const CalendarNavigation = memo(({handleWeekChange}: {handleWeekChange: (direction: 'next' | 'prev') => void}) => {
    return (
        <StyledWeekNavigation>
            <StyledIcon
                src={backIcon}
                alt='back'
                onClick={() => handleWeekChange('prev')}
            />
            Go to week
            <StyledIcon
                src={forvardIcon}
                alt='forward'
                onClick={() => handleWeekChange('next')}
            />
        </StyledWeekNavigation>
    )
});

export default CalendarNavigation;