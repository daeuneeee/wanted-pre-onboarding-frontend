import styled from "@emotion/styled";

const SignUpPresenter = (props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <p style={{ fontSize: "30px" }}>회원가입</p>
          <Input
            type="text"
            placeholder="이메일"
            value={props.email}
            onChange={props.onChangeEmail}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={props.password}
            onChange={props.onChangePassword}
          />
          {props.isOn ? (
            <Button onClick={props.onClickSignUp}>회원가입</Button>
          ) : (
            <Button disabled>회원가입</Button>
          )}

          <Span onClick={props.onClickSignIn}>로그인</Span>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUpPresenter;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 30px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 500px;
  padding: 1rem;
`;

export const Button = styled.button`
  width: 536px;
  padding: 1rem;
  font-size: 18px;
  cursor: pointer;
`;

export const Span = styled.span`
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
`;
