import React from "react";
import TodoItem from "./TodoItem";

const TodoList1 = ({todos}) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList1;