import styled from "styled-components";

export const TitlesContainer = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AccountsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 150px 150px;
  grid-gap: 25px;
  height: 50vh;
  padding: 0px 30px;
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentContainer = styled.div`
  height: 40vh;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
