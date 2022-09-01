import React from 'react'
import Info from './Info'
export default function UserInfo(props) {
  return (
    <div>  <h2> User Info </h2>
    
    <h3>Author Name : {props.author.name} </h3>
    <Info image={props.author.profileImg} />  </div>
  )
}
