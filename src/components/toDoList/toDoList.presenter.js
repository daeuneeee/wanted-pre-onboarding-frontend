import styled from "@emotion/styled";

const ToDoListPresenter = (props) => {
  return (
    <Container>
      <Ul key={props.dataMap?.id}>
        <li>
          {props.isEdit ? (
            <>
              <input onChange={props.onChangeEditTodo} value={props.editTodo} />
              <button onClick={props.onClickEdit} id={props.dataMap?.id}>
                제출
              </button>
              <button onClick={props.onClickCancel}>취소</button>
            </>
          ) : (
            <span>{props.dataMap?.todo}</span>
          )}
        </li>
        <div>
          <button id={props.dataMap?.id} onClick={props.onClickDone}>
            {props.dataMap?.isCompleted ? "완료" : "미완료"}
          </button>

          <button id={props.dataMap?.id} onClick={props.onClickEditBtn}>
            수정
          </button>
          <button id={props.dataMap?.id} onClick={props.onClickDelete}>
            삭제
          </button>
        </div>
      </Ul>
    </Container>
  );
};

export default ToDoListPresenter;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ul = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
