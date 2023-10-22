import styled from 'styled-components';
import { HOUR_CELL_HEIGHT, HOUR_MARGIN_TOP } from '../../constants';

type ColGridProps = {
    first?: string;
    cols: number;
};

type RowGridProps = {
    rows: number;
};

type HourLineProps = {
    fromtop: number;
};

type StyledDayCell = {
    istoday: string;
};

type Event = {
    fromtop: number;
    height: number;
    bgcolor: string | undefined;
};

export const StyledCalendarWrapper = styled.div`
  border-radius: 10px;
  color: black;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const StyledAppWrapper = styled.div`
  border-radius: 10px;
  color: black;
  overflow: scroll;
  display: flex;
`;

export const StyledCalenarBody = styled.div`
  width: 80%;
  border: 1px solid lightgray;
  margin: 15px;
  border-radius: 10px;
  position: relative;
  align-self: center;
  max-height: 70vh;
  overflow-y: auto;
`;

export const StyledColGrid = styled.div<ColGridProps>`
  display: grid;
  grid-template-columns: ${({ first }) => first || ''} repeat(
      ${({ cols }) => cols},
      1fr
  );
`;

export const StyledRowGrid = styled.div<RowGridProps>`
  color: black;
  display: grid;
`;

export const StyledHourCell = styled.div`
  text-align: center;
  border-bottom: 1px dashed lightgray;
  border-right: 1px dashed lightgray;
  border-radius: 5px;
  margin: 0;
  height: ${HOUR_CELL_HEIGHT}px;
  background-color: rgb(232, 247, 223);

  &:first-child {
    border-top: 1px dashed lightgray;
    margin-top: ${HOUR_MARGIN_TOP}px;
  }
`;

export const StyledDayCell = styled.div<StyledDayCell>`
  text-align: center;
  border-bottom: 1px dashed lightgray;
  border-right: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  background-color: ${({ istoday }) =>
    istoday === 'true' ? 'lightblue' : undefined};
  display: relative;

  &:first-child {
      border-left: 1px solid lightgray;
  }
`;

export const StyledHourLine = styled.div<HourLineProps>`
  position: absolute;
  width: 100%;
  top: ${({ fromtop }) => fromtop}px;
  border: 1px solid lightgray;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`;

export const StyledWeekNavigation = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIcon = styled.img`
  height: 17px;
  width: 17px;
  background: wheat;
  padding: 3px;
  margin-inline: 5px;
  border-radius: 100%;
  transition: background 0.2s;

  &:hover {
    background: lightgreen;
  }

  &:active {
    background: orange;
  }
`;

export const StyledEvent = styled.div<Event>`
  position: absolute;
  text-align: center;
  width: 10%;
  height: ${({ height }) => height}px;
  top: ${({ fromtop }) => fromtop}px;
  border: 1px solid lightgray;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'lightgreen')};
  font-size: 13px;

  &:hover {
    background: lightsalmon;
    z-index: 999;
  }

  &:active {
    background: orange;
  }
`;

export const StyledStateWrapper = styled.div`
  margin-top: 30vh;
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const StyledLoader = styled.img`
  height: 100px;
  width: 100px;
`;

export const StyledError = styled.img`
  height: 300px;
  width: 300px;
`;

export const StyledMainWrapper = styled.div`
  border-radius: 10px;
  color: black;
  overflow: scroll;
  display: flex;
`;
