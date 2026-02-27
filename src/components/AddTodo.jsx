import React from 'react'
import { useState } from 'react'

function AddTodo({onAdd}) {
    const [newTodo, setNewTodo]= useState({body: ''})

    function handleChange(e){
        const {name, value} = e.target
        setNewTodo({...newTodo, [name]:value})
        
    }

    async function handleSumbit(e){
        e.preventDefault()
        const configObj={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            
            },
            body:JSON.stringify({
                body:newTodo.body,
                done:false
            })
        }
        try{
            const r = await fetch('http://localhost:4000/todos', configObj)
            if (r.ok){
                const savedTodo=await r.json()
                onAdd(savedTodo)
                setNewTodo({body:''})
            }
        }catch(error){
            console.log(error.message)
        }

    }

  return (
    <form className='form-addtodo' onSubmit={handleSumbit}>
        <label>Add New ToDo:
            <input
                type='text'
                name='body'
                placeholder='Add you task...'
                value={newTodo.body}
                onChange={handleChange}
            />
            <button type='submit'>Add Task</button>
        </label>
    </form>
  )
}

export default AddTodo
