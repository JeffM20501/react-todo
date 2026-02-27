import React from 'react'

function User({id, name, profile}) {

  return (
    <div className='user-profile' key={id} id={id}>
        <img alt="profile image" src={profile}/>
        <p>{name}</p>
    </div>
  )
}

export default User
