import React, { useState, useEffect } from 'react'
import Users from '../Users'
import { fetchData } from '../../commons/data/fetchDataFromAPI'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'

const InputField = () => {
  const [inputText, setInputText] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    setFilteredUsers(
      data.filter(user =>
        user.username.toLowerCase().includes(inputText.toLowerCase())
      )
    )
  }, [inputText, data])

  return (
    <>
      <input
        className='input'
        type='text'
        placeholder='username'
        onChange={event => setInputText(event.target.value)}
        value={inputText}
      />

      { filteredUsers.map(user => ( 
        <div onClick={() => setInputText(user.username)}>
          { !inputText.length || inputText.length === user.username.length
            ? '' 
            : <Users 
                {...user}
                key={user.username}
              />
          }
        </div>
      )) } 
    </>
  )
}

export default InputField