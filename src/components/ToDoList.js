import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';

function ToDOList(props) {
    return (
        <div>
            <li>{props.listItem}</li>
            <Zoom in = {true}>
                <button onClick={() => {
                    props.onChecked(props.listItem)
                }}>
                    <DeleteIcon />
                </button>
            </Zoom>
        </div>
    )
}
export default ToDOList