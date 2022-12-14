import axios from "axios";
import { useState } from "react";
import ToDoListPresenter from "./toDoList.presenter";

const ToDoListContainer = (props) => {
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const data = props.data;
  const dataMap = props.el;
  const getData = props.getData;

  const onClickDone = async (event) => {
    let todo = null;
    data.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        todo = el;
      }
    });
    await axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.currentTarget.id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        todo: todo.todo,
        isCompleted: !todo.isCompleted,
      },
    });
    getData();
  };

  const onClickDelete = async (event) => {
    await axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.currentTarget.id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    getData();
  };

  const onClickEdit = async (event) => {
    try {
      await axios({
        url: `https://pre-onboarding-selection-task.shop/todos/${event.currentTarget.id}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        data: {
          todo: editTodo,
          isCompleted: dataMap?.isCompleted,
        },
      });
      setIsEdit(false);
      getData();
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickEditBtn = (event) => {
    data.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        setIsEdit((prev) => !prev);
      }
    });
  };

  const onChangeEditTodo = (event) => {
    setEditTodo(event.target.value);
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  return (
    <ToDoListPresenter
      data={data}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickEditBtn={onClickEditBtn}
      isEdit={isEdit}
      dataMap={dataMap}
      editTodo={editTodo}
      onClickCancel={onClickCancel}
      onChangeEditTodo={onChangeEditTodo}
    />
  );
};

export default ToDoListContainer;
