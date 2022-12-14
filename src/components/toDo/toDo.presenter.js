import styled from "@emotion/styled";
import ToDoListContainer from "../toDoList/toDoList.container";

const ToDoPresenter = (props) => {
  return (
    <Container>
      <Wrapper>
        <P style={{ fontSize: "30px" }}>ToDo List</P>
        <div style={{ marginBottom: "20px" }}>
          <Input type="text" value={props.todo} onChange={props.onChangeTodo} />
          <button style={{ padding: "0.3rem 1rem" }} onClick={props.onClickAdd}>
            등록
          </button>
        </div>
      </Wrapper>
      {props.data?.data?.map((el) => (
        <ToDoListContainer getData={props.getData} el={el} key={el.id} />
      ))}
    </Container>
  );
};

export default ToDoPresenter;

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

export const P = styled.p`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 300px;
  padding: 0.3rem;
`;

export const Ul = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
