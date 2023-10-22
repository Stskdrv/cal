import { v4 } from "uuid";
import { DAYS, HOUR_CELL_HEIGHT } from "../../constants";
import { addDateBy, calcPosition, checkDates, createNumberArray } from "../../utils";
import { StyledCalenarBody, StyledColGrid, StyledDayCell, StyledEvent, StyledHourCell, StyledRowGrid } from "./calendar.style";
import { SessionType } from "../../types/types";


const CalendarBody = ({mondayDate,sessions } : {mondayDate: Date, sessions: SessionType[]}) => {
    return (
        <StyledCalenarBody>
        <StyledColGrid first={'100px'} cols={1}>
          <StyledRowGrid rows={24}>
            {createNumberArray(24).map((hour: number) => (
              <StyledHourCell key={v4()}>{hour}</StyledHourCell>
            ))}
          </StyledRowGrid>
          <StyledColGrid cols={7}>
            {DAYS.map((day, i) => (
              <StyledDayCell
                key={v4()}
                istoday={String(checkDates(
                  new Date(),
                  addDateBy(mondayDate, i),
                ))}>
                {day}
                {sessions.map((session: SessionType) => {
                  const sessionDate = new Date(session.time);
                  return checkDates(addDateBy(mondayDate, i), sessionDate) &&
                    <StyledEvent
                      key={v4()}
                      fromtop={
                        calcPosition(sessionDate)
                      }
                      height={session.duration * HOUR_CELL_HEIGHT}
                      bgcolor={session.activity?.color}>
                      {session.activity?.name}
                    </StyledEvent>
                })}

              </StyledDayCell>
            ))}
          </StyledColGrid>
        </StyledColGrid>
      </StyledCalenarBody>
    )
};


export default CalendarBody;