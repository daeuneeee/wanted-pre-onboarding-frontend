import axios from "axios";
import { useState } from "react";
import ToDoListPresenter from "./toDoList.presenter";

const ToDoListContainer = (props) => {
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dataMap = props.el;
  const getData = props.getData;

  const onClickDone = async (event) => {
    await axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.currentTarget.id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        todo: dataMap.todo,
        isCompleted: !dataMap.isCompleted,
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
    if (String(dataMap.id) === String(event.target.id))
      setIsEdit((prev) => !prev);
  };

  const onChangeEditTodo = (event) => {
    setEditTodo(event.target.value);
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  return (
    <ToDoListPresenter
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
