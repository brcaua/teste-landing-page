import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 30px;
  margin-bottom: 15vh;
`;
export const Title = styled.h1`
  margin-left: -8em;
  font-size: 24px;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Items = styled.ul`
  display: flex;
  list-style-type: none;
  margin-right: -10em;
`;
export const Item = styled.li`
  margin-left: 50px;
  font-size: 14px;
  font-weight: 520;
`;
export const Span = styled.a`
  padding: 10px;
  background-color: #041e42;
  :hover {
    border-top: 3px solid #e0004d;
  }
`;
