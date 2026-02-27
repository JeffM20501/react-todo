import React from 'react'

function SearchTodo({search, onSearchChange}) {
  return (
    <nav>
        <label>Search:
          <input
              type='text'
              placeholder='Search ToDo...'
              name='search'
              value={search}
              onChange={e=>onSearchChange(e.target.value)}
          />
        </label>
    </nav>
  )
}

export default SearchTodo
