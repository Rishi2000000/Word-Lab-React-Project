import React from 'react'
import { Todowork } from './Todowork'

export const Todo = (props) => {
  return (
    <div className='container'>
        <div>
        <h3>Todos List</h3>
{/* {props.todos.map((todo)=>{
    return <Todowork todo={todo} onDelete={onDelete}/>
})} */}
<Todowork todo={props.todos[0]}/>

        


        </div>
        
    </div>
  )
}
