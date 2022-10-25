import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  background: #fff;
  padding: 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  justify-content: center;

  margin: 70px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
