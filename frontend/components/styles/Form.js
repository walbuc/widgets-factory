import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  button,
  input[type="submit"] {
    width: auto;
    background: #11939a;
    color: white;
    border-color: black;
    font-size: 2rem;
    font-weight: 500;
    padding: 0.5rem 1.2rem;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
`;

export const Button = styled.button({
  display: "inline-block",
  padding: "6px 12px",
  marginBottom: "0",
  fontSize: "14px",
  fontWeight: "normal",
  lineHeight: "1.42857143",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
  userSelect: "none",
  backgroundImage: "none",
  border: "1px solid transparent",
  borderRadius: "4px"
});

export const PrimaryButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#11939A",
  borderColor: "black"
});
export const Input = styled.input({
  display: "block",
  width: "100%",
  height: "34px",
  padding: "6px 12px",
  fontSize: "14px",
  lineHeight: "1.42857143",
  color: "#555",
  backgroundColor: "#fff",
  backgroundImage: "none",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 1px rgba(0, 0, 0, .075)",
  transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
  ":focus": {
    borderColor: "#66afe9",
    outline: "0",
    boxShadow:
      "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)"
  }
});

export default Form;
