import React from "react";

function ToDOList(props) {
    return (
        <div>
            <li>{props.listItem}</li>
            <button onClick={() => {
                props.onChecked(props.listItem)
            }}>X</button>
        </div>
    )
}
export default ToDOList