import React from "react";
import {MdCheckCircle, MdCheckBoxOutlineBlank} from 'react-icons/md';

const TodoItem = ({ todo }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoItem">
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? <MdCheckCircle /> : <MdCheckBoxOutlineBlank />}
                <div>{text}</div>
            </div>
        </div>
    );
};

export default TodoItem;