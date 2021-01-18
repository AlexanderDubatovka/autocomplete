import React from 'react'
import './index.css'

const Users = props => {
  const { username } = props

  return (
    <div className='users'>
      <ul>
        <li>{username}</li>
      </ul>
    </div>
  )
}

export default Users