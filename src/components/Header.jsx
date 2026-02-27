import React from 'react'
import User from './User'
function Header({user}) {
    
    const mappedUser=user.map(u=>(
        <User
            id={u.id}
            key={u.id}
            name={u.name}
            profile={u.profile}
        />
    ))

  return (
    <main>
        <header className='header'>
            <div>
                <h3>TODO</h3>
            </div>
            {mappedUser}
        </header>
    </main>
    
  )
}

export default Header
