import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDoPresenter from "./toDo.presenter";

const ToDoContainer = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  const [data, setData] = useState("");

  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onClickAdd = async () => {
    await axios({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        todo,
      },
    });
    setTodo("");
    getData();
  };

  const getData = async () => {
    const data = await axios({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setData(data);
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    } else {
      getData();
    }
  }, [navigate]);

  return (
    <ToDoPresenter
      onChangeTodo={onChangeTodo}
      todo={todo}
      onClickAdd={onClickAdd}
      data={data}
      getData={getData}
    />
  );
};

export default ToDoContainer;
