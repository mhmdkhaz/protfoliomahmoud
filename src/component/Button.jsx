import styled from "styled-components";

function Button() {
  return (
    <ButtonAll className="text-2xl font-medium rounded-md uppercase px-2 py-3">
      Get started
    </ButtonAll>
  );
}

export default Button;

const ButtonAll = styled.button`
  background-color: ${(props) => props.theme.colors.yellow};
`;
