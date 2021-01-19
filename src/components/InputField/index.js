import React, { useState, useEffect } from 'react'
import Users from '../Users'
import { fetchData } from '../../store/fetchDataFromAPI'
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

  const textHandler = event => {
    setInputText(event.target.value)
  }

  const updateHandler = name => {
    setInputText(name)
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

      { filteredUsers.map(users => ( 
          <div onClick={() => updateHandler(users.username)}>
            { inputText.length === 0 || inputText.length === users.username.length
              ? '' 
              : <Users 
                  {...users}
                  key={Date.now().toString()}
                />
            }
          </div>
      )) } 
    </>
  )
}

export default InputField