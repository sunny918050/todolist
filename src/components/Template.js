import React from "react";

const Template = ({children}) => {
    return (
        <div className="Template">
        <div>오늘 할 일</div>
        <div>{children}</div>
        </div>
    );
};

export default Template;