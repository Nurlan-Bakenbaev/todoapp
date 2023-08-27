import React from 'react'

const Todo = ({todo}) => {
const style = {

}
  return (
    <li className={style.li}>Todo
    <div className={style.row}> 
    <input type="checkbox"  />
    <p className={style.text}> {todo}</p> </div>
    <button></button>
    </li>
  )
}

export default Todo