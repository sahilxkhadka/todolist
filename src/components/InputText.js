import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';


function InputText(props) {
    const [listItem, setListItem] = useState("")
    function handleInput(event) {
        setListItem(event.target.value)
    }
    return (
        <div className="form">
        <input type="text" onChange={handleInput} value={listItem} />
        <button onClick={() => {
            props.onButtonClick(listItem)
            setListItem("")
        }}>
          <span>
            <AddIcon />
          </span>
        </button>
      </div>
    )
}

export default InputText