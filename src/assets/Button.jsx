import React from "react";
function Button({ onClick, children, btnstyle }) {
    return (
        <div className={`${btnstyle}`}
            onClick={onClick}>
            {children}
        </div>
    )

}

export default Button;