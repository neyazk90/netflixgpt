import React from 'react'
import { USERS } from '../../shared/config'
import UserList from '../components/UserList'

const Users = () => {

  return (<UserList users={ USERS }/>
  )
}

export default Users