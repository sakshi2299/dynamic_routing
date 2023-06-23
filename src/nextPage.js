import React from 'react'
import UserDetails from './User'

function NextPage() {
  return (
    <div>
      <h1>name {UserDetails.name}</h1>
      console.log(UserDetails.name)
    </div>
  )
}

export default NextPage;
