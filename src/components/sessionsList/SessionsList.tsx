import { useMemo, useState } from "react";
import filterIcon from '../../assets/filter.png';
import {
    StyledCoachImg,
    StyledIcon,
    StyledInput,
    StyledInputWrapper,
    StyledListWrapper,
    StyledSessionItem,
    StyledSessionListWrapper,
    StyledSessionLogo
} from "./sessionslist.style";
import { SessionType } from "../../types/types";
import { LOADING_STATE } from "../../constants";


interface Props {
    sessions: SessionType[];
    loadingState: string;
}

const SessionsList = ({ sessions, loadingState }: Props) => {

    const [filterValue, setFilterValue] = useState<string>('');

    const handleInputChange = (query: string) => {
        setFilterValue(query);
    };

    const filteredSessions = useMemo(() => {
        const filterQuery = filterValue.toLowerCase();
        return sessions.filter((session: SessionType) => {
            const sessionData = '' + session.activity?.name + session.location + session.coach?.name + session.date;
            return sessionData?.toLowerCase().includes(filterQuery);
        });
    }, [sessions, filterValue]);


    return (
        <StyledSessionListWrapper>
            Sessions list:
            <StyledInputWrapper>
                <StyledIcon src={filterIcon} alt='filter' />
                <StyledInput
                    type='text'
                    placeholder="Filter Sessions"
                    value={filterValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </StyledInputWrapper>

            <StyledListWrapper>
                {(loadingState === LOADING_STATE.READY) && (
                    filteredSessions.map((session: SessionType) => (
                        <StyledSessionItem key={session.id} bgcolor={session.activity?.color}>
                            <div>
                                <p>Activity: {session.activity?.name}</p>
                                <p>Date: {session.date}</p>
                                <p>Time: {session.time.slice(11, 16)}</p>
                                <p>Duration: {session.duration * 60} min</p>
                                <p>Location: {session.location}</p>
                                <p>Coach: {session.coach?.name}</p>
                                {session.coach?.photo && <StyledCoachImg src={session.coach?.photo} alt="photo" />}
                                {session.activity?.logo && <StyledSessionLogo src={session.activity?.logo} alt="logo" />}
                            </div>
                        </StyledSessionItem>
                    ))
                )}
            </StyledListWrapper>

        </StyledSessionListWrapper>
    )
};

export default SessionsList;