import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: auto;

`;
export const ContainerHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 55px;


`;
export const Right = styled.div`
  flex: 8;

`;

export const Left = styled.div`
  flex: 4;
  width: 100%;
  display: flex;
  justify-content: space-around;

  & span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px 80px 0 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 7px #a3a3a3;

  }

`;

export const UserContainer = styled.div`
    margin: 10px 0 0 0;
  
    
`;
export const UserContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap:6px;
`;