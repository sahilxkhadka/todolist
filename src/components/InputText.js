import React, {useState} from "react";

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
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputText