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
  img {
    width: 200px;
    height: 200px;
    filter: brightness(0) invert(1);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  padding: 10px 12px;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 8px;
  border: none;
  border-radius: 16px;
  :hover {
    box-shadow: 1em #e0004d;
  }
`;

export const InputStyle = {
  padding: "10px 12px",
  width: "100%",
  marginBottom: "15px",
  marginTop: "8px",
  border: "none",
  borderRadius: "16px",
  hover: {
    boxShadow: "1em #e0004d"
  }
}

export const Label = styled.label`
  display: flex;
  align-self: flex-start;
  font-size: 16px;
  font-weight: 200;
`;
export const Login = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  align-self: flex-end;
  background-color: #e0004d;
  color: white;
  border: 2px solid #e0004d;
  font-weight: bold;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    box-shadow: inset 0 0 1.5em #e0004d, 0 0 1.5em #e0004d;
  }
`;
