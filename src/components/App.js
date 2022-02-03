import React, { useState } from "react"
import ToDOList from "./ToDoList"
import InputText from "./InputText"

function App() {
  const [deleteBtn, setDeleteBtn] = useState(false)
  const [listItemFinal, setListItemFinal] = useState([])
  function handleButton(listItem) {
    setListItemFinal((prevState) => {
      if (!listItem.trim().length) 
        return [...prevState]
      else {
          setDeleteBtn(true)
          return [...prevState, listItem]
      }
    })
  }
  function deleteItem(list) {
    setListItemFinal(prevState => {
      return prevState.filter(
        (item) => {
          return item !== list
        }
      )
    })
  }
  return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <InputText
            onButtonClick = {handleButton}
        />    
        <div>
            <ul>
            {listItemFinal.map((item, index) => (
                <ToDOList 
                key = {index}
                listItem = {item} 
                onChecked = {deleteItem}
                />
            ))}
            </ul>
        </div>
        <button 
            type="button"
            style={{display: deleteBtn ? "block" : "none"}}
            onDoubleClick ={ () => {
                setListItemFinal([])
                setDeleteBtn(false)
            } }
            className="deleteBtn">
            Delete All
        </button>
    </div>
  )
}

export default App