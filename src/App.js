import React, {useState} from "react";
import Template from "./components/Template";
import TodoList1 from "./components/TodoList1";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "운동하기",
      checked: true
    },
    {
      id: 2,
      text: "밥 먹기",
      checked: true
    },
    {
      id: 3,
      text: "책 읽기",
      checked: false
    },
    {
      id: 4,
      text: "공부하기",
      checked: true
    }
  ]);

  return (
    <Template>
      <TodoList1 todos={todos} />
    </Template>
  );
};

export default App;