import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';


function InputText(props) {
    const [listItem, setListItem] = useState("")
    function handleInput(event) {
        setListItem(event.target.value)
      }
    const handleEnter = (event) => {
      if(event.code === "Enter") {
        setInput()
      }
    }
    const setInput = () => {
      props.onButtonClick(listItem)
      setListItem("")
    }
    return (
        <div className="form">
        <input type="text" onChange={handleInput} value={listItem} onKeyDown = {handleEnter}/>
        <button onClick={setInput}
        >
          <span>
            <AddIcon />
          </span>
        </button>
      </div>
    )
}

export default InputText