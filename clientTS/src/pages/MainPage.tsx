import React from 'react'
import { UserProps } from '../components/app.type'

function MainPage({ user, setUser }:UserProps) {
  console.log(user);
  console.log(setUser);
  
  
  return (
    
    <div>MainPages</div>
  )
}

export default MainPage