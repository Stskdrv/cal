import styled from "styled-components";

type Item = {
  bgcolor: string | undefined;
};

export const StyledSessionListWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  margin: 15px;
  padding: 5px;
  color: black;
  height: 72vh;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  
`;

export const StyledListWrapper = styled.div`
  margin: 5px;
  height: 100%;
  justify-content: center;
  overflow-y: auto;
`;

export const StyledSessionItem = styled.div<Item>`
  border-radius: 10px;
  border: 1px solid lightgray;
  color: black;
  background-color: ${({ bgcolor }) => bgcolor ? bgcolor : 'lightgreen'};
  margin: 5px;
`;

export const StyledSessionLogo = styled.img`
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 40px;
  width: 40px;
  margin: 2px;
`;

export const StyledCoachImg = styled.img`
  border-radius: 100%;
  border: 1px solid lightgray;
  height: 50px;
  width: 50px;
  margin: 4px;
`;

export const StyledInput = styled.input`
  width: 70%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;
  align-self: center;

  &:focus {
    border-color: #007bff;
    background-color: lightgray;
  }
  
  &:hover {
    background-color: lightgray;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;  
  margin: 5px;
  justify-content: center;
`;

export const StyledIcon = styled.img`
  height: 25px;
  width: 25px;
  margin: 5px;
`;