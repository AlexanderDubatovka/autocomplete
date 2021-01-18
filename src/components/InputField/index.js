import React, { useState, useEffect } from 'react'
import API from '../../commons/API'
import Users from '../Users'
import './index.css'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/data'

const InputField = () => {
  const [display, setDisplay] = useState(false)
  const [users, setUsers] = useState([])
  const [inputText, setInputText] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data)

  useEffect(() => {
    API
      .get('/')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.username.toLowerCase().includes(inputText.toLowerCase())
      )
    )
  }, [inputText, users])

  const textHandler = event => {
    setInputText(event.target.value)
    setDisplay(true)
  }

  const updateHandler = name => {
    setInputText(name)
    setDisplay(false)
  }

  return (
    <>
      <input
        className='input'
        type='text'
        placeholder='username'
        onChange={textHandler}
        value={inputText}
      />
      { display &&
      filteredUsers.map( (users, i) => ( 
          <div onClick={() => updateHandler(users.username)}>
            { inputText.length === 0 
              ? '' 
              : <Users 
                  key={i}
                  {...users} 
                />
            }
          </div>
      ) ) 
      }

      <br />
      <button onClick={() => dispatch(fetchData())}>Show all usernames</button>
      <br />
      <div>
        {data.map((item, i) => 
          <div 
            key={i} 
            onClick={() => updateHandler(item.username)}
            style={{cursor: 'pointer'}}
          >
            {item.username}
          </div>)
        }
      </div>

    </>
  )
}

export default InputField