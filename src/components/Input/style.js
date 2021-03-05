import styled from "styled-components";

export const Homepage = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  background-color: #e0004d;
  border-radius: 16px;
  :hover {
    box-shadow: inset 0 0 3em #e0004d, 0 0 3em #e0004d;
  }
`;
export const Img = styled.img`
  width: 200px;
  height: 200px;
  filter: brightness(0) invert(1);
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-family: "Gilroy";
  margin-bottom: 15px;
`;
export const Inputs = styled.input`
  padding: 10px 12px;
  margin-bottom: 15px;
  margin-top: 8px;
  border: none;
  border-radius: 16px;
  :hover {
    box-shadow: 1em #e0004d;
  }
`;
export const Label = styled.label`
  display: flex;
  align-self: flex-start;
  font-size: 16px;
  font-family: "Gilroy";
  font-weight: 520;
`;
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 40px;
`;
export const Login = styled.button`
  padding: 10px 20px;
  display: flex;
  align-self: flex-end;
  background-color: #e0004d;
  color: white;
  border: 2px solid #e0004d;
  font-weight: bold;
  border-radius: 16px;
  font-size: 14px;
  :hover {
    box-shadow: inset 0 0 1.5em #e0004d, 0 0 1.5em #e0004d;
  }
`;
export const Signup = styled.button`
  padding: 9px 10px;
  align-self: flex-start;
  background-color: #e0004d;
  color: white;
  border: 2px solid #e0004d;
  border-radius: 16px;
  font-weight: bold;
  font-size: 14px;
  :hover {
    box-shadow: inset 0 0 1.5em #e0004d, 0 0 1.5em #e0004d;
  }
`;
export const ForgetPassword = styled.a`
  margin: 0 auto;
  width: 150px;
  height: 30px;
  align-items: center;
  font-weight: 520;
  :hover {
    border-bottom: 3px solid #e0004d;
  }
`;
