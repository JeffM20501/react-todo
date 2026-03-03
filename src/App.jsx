import { useState } from 'react'
import './App.css'
import SearchTodo from './components/SearchTodo'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { useEffect } from 'react'

function App(){
  const [user, setUser]=useState([])
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState("")

  const jsonServerURL='http://localhost:4000'

  useEffect(()=>{
    async function handleFetch(url,setFunc){
      try{
        const r = await fetch(`${jsonServerURL}/${url}`)
        const data =await r.json()
        setFunc(data)
      }catch(error){
        console.log(error.message)
      }
    }
    
    handleFetch('user', setUser)
    handleFetch('todos', setTodos)
    

  },[jsonServerURL])

  function handleAdd(newTodoObj){
    setTodos([newTodoObj, ...todos])
  }

  async function handleUpdate(id){
    try{
      const toUpdateTodo=todos
        .find(todo=>todo.id===id)
      // console.log(toUpdateTodo)

      if (!toUpdateTodo) return 

      const updateToDo = {...toUpdateTodo, done:!toUpdateTodo.done}

      const configObj={
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({done:updateToDo.done})
      }

      const r  =await fetch(`${jsonServerURL}/todos/${encodeURIComponent(id)}`, configObj)
      if (r.ok){
        setTodos(todos.map(todo=>todo.id===id
          ?updateToDo
          :todo))
      }
    }catch(error){
      console.log(error.message)
    }
  }

  async function handleDelete(id){
    try{
      const toDeleteTodo=todos.find(todo=>todo.id===id)
      const configObj={
        method:'DELETE'
      }
      if (!toDeleteTodo) return 

      const r=await fetch(`${jsonServerURL}/todos/${encodeURIComponent(id)}`, configObj)

      if (r.ok){
        setTodos(todos.filter(todo=>todo.id!==id))

      }
    }catch(error){
      console .log(error.message)
    }
  }

  const displayedTodo=todos
    .filter((todo)=>todo.body.toLowerCase()
    .includes(search.toLowerCase()))

  return (
    <main className='main'>
      <section>
        <Header user={user}/>
      </section>
      <section className='todo-sec'>
        <SearchTodo search={search} onSearchChange={setSearch} />
        <AddTodo onAdd={handleAdd}/>
        <TodoList
          todos={displayedTodo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
      />
      </section>
    </main>
  )
}

export default App
