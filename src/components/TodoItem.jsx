import React from 'react'

function TodoItem({id, body, done, onUpdate, onDelete}) {
  const completed= done
    ?'completed'
    :''
  return (
    <ul className='todo-item'>
        <li id={id} className={completed}>{body}</li>
        {done
            ?<button className={completed} onClick={()=>onDelete(id)}>Delete Completed Task</button>
            :<button className={completed} onClick={()=>onUpdate(id)}>Mark as Completed</button>
        }
    </ul>
  )
}

export default TodoItem
